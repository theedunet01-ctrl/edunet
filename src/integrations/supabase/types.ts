export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Dsa: {
        Row: {
          "-- First": string | null
          "let's make sure we drop any existing objects that might be caus":
            | string
            | null
        }
        Insert: {
          "-- First"?: string | null
          "let's make sure we drop any existing objects that might be caus"?:
            | string
            | null
        }
        Update: {
          "-- First"?: string | null
          "let's make sure we drop any existing objects that might be caus"?:
            | string
            | null
        }
        Relationships: []
      }
      email_campaigns: {
        Row: {
          created_at: string
          created_by: string | null
          failed_count: number | null
          html_body: string | null
          id: string
          name: string
          plain_body: string | null
          recipient_count: number | null
          sent_count: number | null
          status: string | null
          subject: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          failed_count?: number | null
          html_body?: string | null
          id?: string
          name: string
          plain_body?: string | null
          recipient_count?: number | null
          sent_count?: number | null
          status?: string | null
          subject: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          failed_count?: number | null
          html_body?: string | null
          id?: string
          name?: string
          plain_body?: string | null
          recipient_count?: number | null
          sent_count?: number | null
          status?: string | null
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      email_sends: {
        Row: {
          campaign_id: string | null
          created_at: string
          error_message: string | null
          id: string
          recipient_email: string
          sent_at: string | null
          status: string | null
        }
        Insert: {
          campaign_id?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          recipient_email: string
          sent_at?: string | null
          status?: string | null
        }
        Update: {
          campaign_id?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          recipient_email?: string
          sent_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_sends_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "email_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          created_at: string
          created_by: string | null
          html_body: string | null
          id: string
          name: string
          plain_body: string | null
          subject: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          html_body?: string | null
          id?: string
          name: string
          plain_body?: string | null
          subject: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          html_body?: string | null
          id?: string
          name?: string
          plain_body?: string | null
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      invoice_items: {
        Row: {
          created_at: string | null
          description: string
          id: string
          invoice_id: string | null
          quantity: number | null
          service_id: string | null
          total_price: number
          unit_price: number
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          invoice_id?: string | null
          quantity?: number | null
          service_id?: string | null
          total_price: number
          unit_price: number
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          invoice_id?: string | null
          quantity?: number | null
          service_id?: string | null
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          created_at: string | null
          created_by: string | null
          due_date: string | null
          id: string
          invoice_number: string
          notes: string | null
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          student_id: string | null
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          due_date?: string | null
          id?: string
          invoice_number: string
          notes?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          student_id?: string | null
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          due_date?: string | null
          id?: string
          invoice_number?: string
          notes?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          student_id?: string | null
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          created_at: string
          created_by: string | null
          email: string | null
          english_proficiency: string | null
          id: string
          lead_id: string
          name: string
          notes: string | null
          phone: string | null
          qualifications: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          email?: string | null
          english_proficiency?: string | null
          id?: string
          lead_id: string
          name: string
          notes?: string | null
          phone?: string | null
          qualifications?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          email?: string | null
          english_proficiency?: string | null
          id?: string
          lead_id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          qualifications?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          created_by: string | null
          id: string
          invoice_id: string | null
          notes: string | null
          payment_date: string | null
          payment_method: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          created_by?: string | null
          id?: string
          invoice_id?: string | null
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          created_by?: string | null
          id?: string
          invoice_id?: string | null
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string
          full_name: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name: string
          id: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Relationships: []
      }
      remarks: {
        Row: {
          contact_method: string | null
          created_at: string
          created_by: string | null
          id: string
          lead_id: string | null
          remark_text: string
          student_id: string | null
        }
        Insert: {
          contact_method?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          lead_id?: string | null
          remark_text: string
          student_id?: string | null
        }
        Update: {
          contact_method?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          lead_id?: string | null
          remark_text?: string
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "remarks_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "remarks_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      reminders: {
        Row: {
          completed_at: string | null
          created_at: string
          created_by: string | null
          id: string
          is_completed: boolean
          lead_id: string | null
          reminder_date: string
          reminder_method: string
          reminder_reason: string
          student_id: string | null
          updated_at: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          is_completed?: boolean
          lead_id?: string | null
          reminder_date: string
          reminder_method: string
          reminder_reason: string
          student_id?: string | null
          updated_at?: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          is_completed?: boolean
          lead_id?: string | null
          reminder_date?: string
          reminder_method?: string
          reminder_reason?: string
          student_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reminders_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reminders_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          service_type: Database["public"]["Enums"]["service_type"]
          standard_price: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          service_type: Database["public"]["Enums"]["service_type"]
          standard_price?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          service_type?: Database["public"]["Enums"]["service_type"]
          standard_price?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      students: {
        Row: {
          course: string | null
          created_at: string | null
          created_by: string | null
          email: string | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          student_id: string
          updated_at: string | null
        }
        Insert: {
          course?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          student_id: string
          updated_at?: string | null
        }
        Update: {
          course?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          student_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      payment_status: "paid" | "unpaid" | "partial"
      service_type: "ielts" | "visa" | "counseling" | "other"
      user_role: "admin" | "staff"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      payment_status: ["paid", "unpaid", "partial"],
      service_type: ["ielts", "visa", "counseling", "other"],
      user_role: ["admin", "staff"],
    },
  },
} as const
