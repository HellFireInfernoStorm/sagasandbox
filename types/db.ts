export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      characters: {
        Row: {
          created_at: string
          description: string | null
          fal_request_id: string | null
          gen_status: string
          generated_portrait_url: string | null
          id: string
          name: string
          project_id: string
          reference_image_url: string | null
          role: string | null
          visual_traits: Json
          voice_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          fal_request_id?: string | null
          gen_status?: string
          generated_portrait_url?: string | null
          id?: string
          name: string
          project_id: string
          reference_image_url?: string | null
          role?: string | null
          visual_traits?: Json
          voice_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          fal_request_id?: string | null
          gen_status?: string
          generated_portrait_url?: string | null
          id?: string
          name?: string
          project_id?: string
          reference_image_url?: string | null
          role?: string | null
          visual_traits?: Json
          voice_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "characters_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      event_characters: {
        Row: {
          character_id: string
          event_id: string
        }
        Insert: {
          character_id: string
          event_id: string
        }
        Update: {
          character_id?: string
          event_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_characters_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_characters_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "timeline_events"
            referencedColumns: ["id"]
          },
        ]
      }
      exports: {
        Row: {
          created_at: string
          event_ids: string[]
          id: string
          output_url: string | null
          project_id: string
          status: string
          type: string
        }
        Insert: {
          created_at?: string
          event_ids?: string[]
          id?: string
          output_url?: string | null
          project_id: string
          status?: string
          type: string
        }
        Update: {
          created_at?: string
          event_ids?: string[]
          id?: string
          output_url?: string | null
          project_id?: string
          status?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "exports_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      location_pins: {
        Row: {
          canvas_x: number
          canvas_y: number
          created_at: string
          description: string | null
          fal_request_id: string | null
          gen_status: string
          generated_image_url: string | null
          id: string
          label: string
          project_id: string
        }
        Insert: {
          canvas_x: number
          canvas_y: number
          created_at?: string
          description?: string | null
          fal_request_id?: string | null
          gen_status?: string
          generated_image_url?: string | null
          id?: string
          label: string
          project_id: string
        }
        Update: {
          canvas_x?: number
          canvas_y?: number
          created_at?: string
          description?: string | null
          fal_request_id?: string | null
          gen_status?: string
          generated_image_url?: string | null
          id?: string
          label?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "location_pins_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
        }
        Relationships: []
      }
      project_members: {
        Row: {
          joined_at: string
          project_id: string
          role: string
          user_id: string
        }
        Insert: {
          joined_at?: string
          project_id: string
          role: string
          user_id: string
        }
        Update: {
          joined_at?: string
          project_id?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          aesthetic_style: string
          canvas_state: Json
          created_at: string
          id: string
          name: string
          owner_id: string
          style_config: Json
          theme: string
          updated_at: string
        }
        Insert: {
          aesthetic_style: string
          canvas_state?: Json
          created_at?: string
          id?: string
          name: string
          owner_id: string
          style_config?: Json
          theme: string
          updated_at?: string
        }
        Update: {
          aesthetic_style?: string
          canvas_state?: Json
          created_at?: string
          id?: string
          name?: string
          owner_id?: string
          style_config?: Json
          theme?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      timeline_events: {
        Row: {
          audio_url: string | null
          created_at: string
          description: string | null
          fal_request_id: string | null
          gen_status: string
          generated_image_url: string | null
          id: string
          in_world_time: string | null
          pin_id: string | null
          project_id: string
          sequence_order: number
          title: string
        }
        Insert: {
          audio_url?: string | null
          created_at?: string
          description?: string | null
          fal_request_id?: string | null
          gen_status?: string
          generated_image_url?: string | null
          id?: string
          in_world_time?: string | null
          pin_id?: string | null
          project_id: string
          sequence_order: number
          title: string
        }
        Update: {
          audio_url?: string | null
          created_at?: string
          description?: string | null
          fal_request_id?: string | null
          gen_status?: string
          generated_image_url?: string | null
          id?: string
          in_world_time?: string | null
          pin_id?: string | null
          project_id?: string
          sequence_order?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "timeline_events_pin_id_fkey"
            columns: ["pin_id"]
            isOneToOne: false
            referencedRelation: "location_pins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "timeline_events_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_project_member: {
        Args: { p_project_id: string; p_roles?: string[] }
        Returns: boolean
      }
      storage_project_id: { Args: { object_name: string }; Returns: string }
      user_project_role: { Args: { p_project_id: string }; Returns: string }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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

export const Constants = {
  public: {
    Enums: {},
  },
} as const

/** Row aliases — single source of truth for UI and API (avoids drift from hand-written shapes). */
export type Profile = Tables<"profiles">
export type Project = Tables<"projects">
export type ProjectInsert = TablesInsert<"projects">
export type LocationPin = Tables<"location_pins">
export type TimelineEvent = Tables<"timeline_events">
export type Character = Tables<"characters">
export type Export = Tables<"exports">
export type ProjectMember = Tables<"project_members">

/** Domain enums aligned with `gen_status` / export columns (not Postgres enums). */
export type GenStatus = "pending" | "generating" | "done" | "error"
export type ExportType = "storyboard_pdf" | "audio_script"
export type ExportStatus = "queued" | "processing" | "done" | "error"
export type CharacterRole = "primary" | "secondary"

export type VisualTraits = {
  hair?: string
  build?: string
  clothing?: string
  features?: string
}

export type StyleConfig = {
  aesthetic?: string
  aesthetic_style?: string
  theme?: string
  tone?: string
}

/** Copilot proposal before user approval (ghost timeline node). */
export type GhostTimelineSuggestion = Pick<
  TimelineEvent,
  "title" | "description" | "pin_id" | "sequence_order"
> & {
  id: string
}

const GEN_STATUSES: GenStatus[] = ["pending", "generating", "done", "error"]

export function asGenStatus(value: string | null | undefined): GenStatus {
  if (value && GEN_STATUSES.includes(value as GenStatus)) {
    return value as GenStatus
  }
  return "pending"
}

export function getVisualTraits(
  traits: Character["visual_traits"],
): VisualTraits {
  if (!traits || typeof traits !== "object" || Array.isArray(traits)) {
    return {}
  }
  const t = traits as Record<string, unknown>
  return {
    hair: typeof t.hair === "string" ? t.hair : undefined,
    build: typeof t.build === "string" ? t.build : undefined,
    clothing: typeof t.clothing === "string" ? t.clothing : undefined,
    features: typeof t.features === "string" ? t.features : undefined,
  }
}
