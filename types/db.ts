/**
 * Placeholder Supabase types until Agent B commits generated types.
 * Replace this file with Supabase Dashboard → API → TypeScript output.
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          display_name: string | null;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          id: string;
          owner_id: string;
          name: string;
          theme: string;
          aesthetic_style: string;
          style_config: Json;
          canvas_state: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          owner_id: string;
          name: string;
          theme: string;
          aesthetic_style: string;
          style_config?: Json;
          canvas_state?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          owner_id?: string;
          name?: string;
          theme?: string;
          aesthetic_style?: string;
          style_config?: Json;
          canvas_state?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      project_members: {
        Row: {
          project_id: string;
          user_id: string;
          role: "owner" | "editor" | "viewer";
          joined_at: string;
        };
        Insert: {
          project_id: string;
          user_id: string;
          role: "owner" | "editor" | "viewer";
          joined_at?: string;
        };
        Update: {
          project_id?: string;
          user_id?: string;
          role?: "owner" | "editor" | "viewer";
          joined_at?: string;
        };
        Relationships: [];
      };
      location_pins: {
        Row: {
          id: string;
          project_id: string;
          label: string;
          canvas_x: number;
          canvas_y: number;
          description: string | null;
          generated_image_url: string | null;
          fal_request_id: string | null;
          gen_status: "pending" | "generating" | "done" | "error";
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          label: string;
          canvas_x: number;
          canvas_y: number;
          description?: string | null;
          generated_image_url?: string | null;
          fal_request_id?: string | null;
          gen_status?: "pending" | "generating" | "done" | "error";
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          label?: string;
          canvas_x?: number;
          canvas_y?: number;
          description?: string | null;
          generated_image_url?: string | null;
          fal_request_id?: string | null;
          gen_status?: "pending" | "generating" | "done" | "error";
          created_at?: string;
        };
        Relationships: [];
      };
      timeline_events: {
        Row: {
          id: string;
          project_id: string;
          pin_id: string | null;
          title: string;
          description: string | null;
          sequence_order: number;
          in_world_time: string | null;
          generated_image_url: string | null;
          audio_url: string | null;
          fal_request_id: string | null;
          gen_status: "pending" | "generating" | "done" | "error";
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          pin_id?: string | null;
          title: string;
          description?: string | null;
          sequence_order: number;
          in_world_time?: string | null;
          generated_image_url?: string | null;
          audio_url?: string | null;
          fal_request_id?: string | null;
          gen_status?: "pending" | "generating" | "done" | "error";
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          pin_id?: string | null;
          title?: string;
          description?: string | null;
          sequence_order?: number;
          in_world_time?: string | null;
          generated_image_url?: string | null;
          audio_url?: string | null;
          fal_request_id?: string | null;
          gen_status?: "pending" | "generating" | "done" | "error";
          created_at?: string;
        };
        Relationships: [];
      };
      characters: {
        Row: {
          id: string;
          project_id: string;
          name: string;
          role: "primary" | "secondary" | null;
          description: string | null;
          visual_traits: Json;
          reference_image_url: string | null;
          generated_portrait_url: string | null;
          voice_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          name: string;
          role?: "primary" | "secondary" | null;
          description?: string | null;
          visual_traits?: Json;
          reference_image_url?: string | null;
          generated_portrait_url?: string | null;
          voice_id?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          name?: string;
          role?: "primary" | "secondary" | null;
          description?: string | null;
          visual_traits?: Json;
          reference_image_url?: string | null;
          generated_portrait_url?: string | null;
          voice_id?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      exports: {
        Row: {
          id: string;
          project_id: string;
          type: "storyboard_pdf" | "audio_script";
          event_ids: string[];
          status: "queued" | "processing" | "done" | "error";
          output_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          type: "storyboard_pdf" | "audio_script";
          event_ids?: string[];
          status?: "queued" | "processing" | "done" | "error";
          output_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          type?: "storyboard_pdf" | "audio_script";
          event_ids?: string[];
          status?: "queued" | "processing" | "done" | "error";
          output_url?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
