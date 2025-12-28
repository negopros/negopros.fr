import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Contact {
  id?: string;

export const contactService = {
  async create(contact: Omit<Contact, 'id' | 'created_at' | 'updated_at' | 'status'>) {
    const { data, error } = await supabase
      .from('contacts')
      .insert([contact])
      .select()
  },

  async getAll() {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });
  },

  async updateStatus(id: string, status: Contact['status']) {
    const { data, error } = await supabase
      .from('contacts')
      .update({ status })
      .eq('id', id)

export const newsletterService = {
  async subscribe(email: string) {
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id, status')
      .eq('email', email)

    if (existing) {
      if (existing.status === 'unsubscribed') {
        const { data, error } = await supabase
          .from('newsletter_subscribers')
          .update({ status: 'active', unsubscribed_at: null })
          .eq('id', existing.id)
      throw new Error('Email already subscribed');
    }

    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()
  },

  async unsubscribe(email: string) {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .update({
        status: 'unsubscribed',
  },

  async getAll() {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('status', 'active')

export const crmService = {
  async createLead(lead: Omit<CRMLead, 'id' | 'created_at' | 'updated_at' | 'status'>) {
    const { data, error } = await supabase
      .from('crm_leads')
      .insert([lead])
      .select()
  },

  async getAllLeads() {
    const { data, error } = await supabase
      .from('crm_leads')
      .select('*')
      .order('created_at', { ascending: false });
  },

  async getLeadsBySource(source: string) {
    const { data, error } = await supabase
      .from('crm_leads')
      .select('*')
      .eq('lead_source', source)
    const updateData: Partial<CRMLead> = { status };
    if (notes) updateData.notes = notes;

    const { data, error } = await supabase
      .from('crm_leads')
      .update(updateData)
      .eq('id', id)
