import { createClient } from '@supabase/Bolt Database-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Bolt Database environment variables');
}

export const Bolt Database = createClient(supabaseUrl, supabaseAnonKey);

export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  status?: 'new' | 'in_progress' | 'contacted' | 'closed';
  created_at?: string;
  updated_at?: string;
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  status?: 'active' | 'unsubscribed';
  subscribed_at?: string;
  unsubscribed_at?: string;
}

export const contactService = {
  async create(contact: Omit<Contact, 'id' | 'created_at' | 'updated_at' | 'status'>) {
    const { data, error } = await Bolt Database
      .from('contacts')
      .insert([contact])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getAll() {
    const { data, error } = await Bolt Database
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async updateStatus(id: string, status: Contact['status']) {
    const { data, error } = await Bolt Database
      .from('contacts')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

export const newsletterService = {
  async subscribe(email: string) {
    const { data: existing } = await Bolt Database
      .from('newsletter_subscribers')
      .select('id, status')
      .eq('email', email)
      .maybeSingle();

    if (existing) {
      if (existing.status === 'unsubscribed') {
        const { data, error } = await Bolt Database
          .from('newsletter_subscribers')
          .update({ status: 'active', unsubscribed_at: null })
          .eq('id', existing.id)
          .select()
          .single();

        if (error) throw error;
        return data;
      }
      throw new Error('Email already subscribed');
    }

    const { data, error } = await Bolt Database
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async unsubscribe(email: string) {
    const { data, error } = await Bolt Database
      .from('newsletter_subscribers')
      .update({
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString()
      })
      .eq('email', email)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getAll() {
    const { data, error } = await Bolt Database
      .from('newsletter_subscribers')
      .select('*')
      .eq('status', 'active')
      .order('subscribed_at', { ascending: false });

    if (error) throw error;
    return data;
  },
};

export interface CRMLead {
  id?: string;
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  lead_source: string;
  lead_type: string;
  status?: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost' | 'nurturing';
  notes?: string;
  metadata?: Record<string, unknown>;
  created_at?: string;
  updated_at?: string;
}

export const crmService = {
  async createLead(lead: Omit<CRMLead, 'id' | 'created_at' | 'updated_at' | 'status'>) {
    const { data, error } = await Bolt Database
      .from('crm_leads')
      .insert([lead])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getAllLeads() {
    const { data, error } = await Bolt Database
      .from('crm_leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getLeadsBySource(source: string) {
    const { data, error } = await Bolt Database
      .from('crm_leads')
      .select('*')
      .eq('lead_source', source)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async updateLeadStatus(id: string, status: CRMLead['status'], notes?: string) {
    const updateData: Partial<CRMLead> = { status };
    if (notes) updateData.notes = notes;

    const { data, error } = await Bolt Database
      .from('crm_leads')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
