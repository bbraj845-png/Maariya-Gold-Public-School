import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard, Image, Users, FileText, Bell, Settings,
  LogOut, Lock, Search, ChevronDown, Upload, Eye, Trash2,
  Edit3, CheckCircle, Archive, Plus, X, Menu, AlertCircle,
  BookOpen, TrendingUp, MessageSquare, Megaphone, Camera,
  Download, Filter, MoreVertical, Shield, School, Star,
  Calendar, Clock, Phone, Mail, User, Save, RefreshCw,
  CheckSquare, Tag, Layers, Home, ChevronRight
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// ─── MOCK DATA ────────────────────────────────────────────────────────────────
const ADMISSION_TREND = [
  { month: "Apr", queries: 18, enrolled: 12 },
  { month: "May", queries: 34, enrolled: 22 },
  { month: "Jun", queries: 52, enrolled: 38 },
  { month: "Jul", queries: 80, enrolled: 60 },
  { month: "Aug", queries: 65, enrolled: 48 },
  { month: "Sep", queries: 28, enrolled: 20 },
  { month: "Oct", queries: 20, enrolled: 14 },
  { month: "Nov", queries: 15, enrolled: 10 },
  { month: "Dec", queries: 12, enrolled: 8 },
  { month: "Jan", queries: 42, enrolled: 30 },
  { month: "Feb", queries: 68, enrolled: 50 },
  { month: "Mar", queries: 55, enrolled: 42 },
];

const ACTIVITY_DATA = [
  { day: "Mon", visits: 320, pageViews: 890 },
  { day: "Tue", visits: 445, pageViews: 1120 },
  { day: "Wed", visits: 380, pageViews: 960 },
  { day: "Thu", visits: 520, pageViews: 1340 },
  { day: "Fri", visits: 490, pageViews: 1210 },
  { day: "Sat", visits: 210, pageViews: 540 },
  { day: "Sun", visits: 150, pageViews: 380 },
];

const PARENTS_DATA = [
  { id: 1, parentName: "Ravi Kumar Sharma", studentName: "Ananya Sharma", class: "VIII-A", contact: "+91 98765 43210", email: "ravi.sharma@gmail.com", lastLogin: "Today, 9:42 AM", status: "Active" },
  { id: 2, parentName: "Sunita Yadav", studentName: "Arjun Yadav", class: "V-B", contact: "+91 87654 32109", email: "sunita.y@yahoo.com", lastLogin: "Yesterday, 3:15 PM", status: "Active" },
  { id: 3, parentName: "Mohammed Irfan", studentName: "Zara Irfan", class: "III-A", contact: "+91 76543 21098", email: "m.irfan@gmail.com", lastLogin: "2 days ago", status: "Active" },
  { id: 4, parentName: "Priya Agarwal", studentName: "Rohan Agarwal", class: "X-B", contact: "+91 65432 10987", email: "priya.ag@hotmail.com", lastLogin: "Apr 8, 2026", status: "Inactive" },
  { id: 5, parentName: "Deepak Verma", studentName: "Kavya Verma", class: "II-C", contact: "+91 54321 09876", email: "deepak.v@gmail.com", lastLogin: "Today, 11:20 AM", status: "Active" },
  { id: 6, parentName: "Anita Singh", studentName: "Vikram Singh", class: "VI-A", contact: "+91 43210 98765", email: "anita.s@gmail.com", lastLogin: "Apr 7, 2026", status: "Active" },
  { id: 7, parentName: "Ramesh Gupta", studentName: "Pooja Gupta", class: "IX-A", contact: "+91 32109 87654", email: "r.gupta@rediff.com", lastLogin: "Apr 5, 2026", status: "Inactive" },
  { id: 8, parentName: "Leela Nair", studentName: "Arun Nair", class: "IV-B", contact: "+91 21098 76543", email: "leela.nair@gmail.com", lastLogin: "Today, 8:05 AM", status: "Active" },
];

const QUERIES_DATA = [
  { id: 1, name: "Harsh Bansal", phone: "+91 98112 34567", class: "Nursery", message: "Looking for admission in Nursery for my 3-year-old daughter. Please share fee structure and timings.", date: "Apr 10, 2026", status: "New" },
  { id: 2, name: "Fatima Sheikh", phone: "+91 87234 56789", class: "Class I", message: "My son is 6 years old. I want to enquire about Class 1 admission process and required documents.", date: "Apr 9, 2026", status: "Contacted" },
  { id: 3, name: "Karan Mehta", phone: "+91 76345 67890", class: "Class V", message: "We are relocating from Delhi. Is mid-session admission possible for Class 5?", date: "Apr 9, 2026", status: "New" },
  { id: 4, name: "Seema Rawat", phone: "+91 65456 78901", class: "Class VIII", message: "Interested in Class 8 admission. What is the scholarship policy for merit students?", date: "Apr 8, 2026", status: "Archived" },
  { id: 5, name: "Vijay Pandey", phone: "+91 54567 89012", class: "Class X", message: "My daughter scored 95% in Class 9. Can she join Class 10 directly with TC from another school?", date: "Apr 8, 2026", status: "Contacted" },
  { id: 6, name: "Nisha Tomar", phone: "+91 43678 90123", class: "KG", message: "Is there a waiting list for KG admissions? The form deadline has passed.", date: "Apr 7, 2026", status: "New" },
];

const GALLERY_IMAGES = [
  { id: 1, url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80", tag: "Students", title: "Annual Sports Day" },
  { id: 2, url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80", tag: "Campus", title: "School Building" },
  { id: 3, url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80", tag: "Events", title: "Library Session" },
  { id: 4, url: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=400&q=80", tag: "Events", title: "Science Exhibition" },
  { id: 5, url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80", tag: "Students", title: "Classroom Activity" },
  { id: 6, url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80", tag: "Campus", title: "Playground" },
  { id: 7, url: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&q=80", tag: "Events", title: "Cultural Program" },
  { id: 8, url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80", tag: "Students", title: "Art Class" },
  { id: 9, url: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=400&q=80", tag: "Campus", title: "Assembly Hall" },
];

const POSTERS = [
  { id: 1, title: "Annual Sports Day 2026", desc: "Join us for the Annual Sports Day celebration on April 25th.", date: "Apr 10, 2026", status: "Published", tag: "Event" },
  { id: 2, title: "Summer Vacation Notice", desc: "School will remain closed from May 20 to June 25, 2026.", date: "Apr 8, 2026", status: "Scheduled", tag: "Notice" },
  { id: 3, title: "Parent-Teacher Meeting", desc: "PTM for Classes VI–X on April 19, 2026 from 9 AM to 1 PM.", date: "Apr 5, 2026", status: "Published", tag: "Meeting" },
];

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "images", label: "Images", icon: Image },
  { key: "parents", label: "Parents", icon: Users },
  { key: "queries", label: "Queries", icon: MessageSquare },
  { key: "posters", label: "Notices", icon: Megaphone },
  { key: "settings", label: "Settings", icon: Settings },
];

const TAG_COLORS: Record<string, string> = {
  Students: "#2563EB",
  Campus: "#059669",
  Events: "#D97706",
  All: "#6B7280",
};

// ─── STAT CARD ────────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, change, color, bg }: {
  icon: any; label: string; value: string; change: string; color: string; bg: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="rounded-2xl p-4 bg-white flex items-center gap-3"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
        <Icon size={18} style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>{label}</p>
        <p style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: 1.2 }}>{value}</p>
        <p style={{ color: "#22C55E", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>{change}</p>
      </div>
    </motion.div>
  );
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function Toast({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-20 left-1/2 -translate-x-1/2 lg:bottom-6 lg:left-auto lg:right-6 lg:translate-x-0 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl w-max max-w-xs"
      style={{ background: type === "success" ? "#0F172A" : "#DC2626", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "13px" }}
    >
      {type === "success" ? <CheckCircle size={16} color="#4ADE80" /> : <AlertCircle size={16} color="#FCA5A5" />}
      <span>{message}</span>
      <button onClick={onClose} className="ml-1 opacity-70 hover:opacity-100"><X size={13} /></button>
    </motion.div>
  );
}

// ─── SECTION HEADER ───────────────────────────────────────────────────────────
function SectionHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3 flex-wrap">
      <div>
        <h1 style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "20px" }}>{title}</h1>
        {subtitle && <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "13px", marginTop: "2px" }}>{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

// ─── DASHBOARD SECTION ────────────────────────────────────────────────────────
function DashboardSection({ setActiveSection }: { setActiveSection: (s: string) => void }) {
  return (
    <div className="space-y-4">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={Users} label="Total Students" value="2,847" change="↑ 124 this session" color="#2563EB" bg="#EFF6FF" />
        <StatCard icon={Shield} label="Parent Logins" value="1,204" change="↑ 38 this week" color="#059669" bg="#ECFDF5" />
        <StatCard icon={MessageSquare} label="New Queries" value="38" change="↑ 12 today" color="#D97706" bg="#FFFBEB" />
        <StatCard icon={Megaphone} label="Posters Live" value="12" change="3 scheduled" color="#7C3AED" bg="#F5F3FF" />
      </div>

      {/* Quick Actions - mobile horizontal scroll */}
      <div className="rounded-2xl bg-white p-4" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}>
        <p className="mb-3" style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px" }}>Quick Actions</p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {[
            { icon: Upload, label: "Upload", color: "#2563EB", bg: "#EFF6FF", section: "images" },
            { icon: Megaphone, label: "Notice", color: "#7C3AED", bg: "#F5F3FF", section: "posters" },
            { icon: MessageSquare, label: "Queries", color: "#D97706", bg: "#FFFBEB", section: "queries" },
            { icon: Users, label: "Parents", color: "#059669", bg: "#ECFDF5", section: "parents" },
            { icon: Settings, label: "Settings", color: "#0F172A", bg: "#F1F5F9", section: "settings" },
          ].map(action => (
            <motion.button
              key={action.label}
              whileTap={{ scale: 0.94 }}
              onClick={() => setActiveSection(action.section)}
              className="flex flex-col items-center gap-1.5 py-3 rounded-xl transition-all"
              style={{ background: "#F8FAFC", border: "1px solid #F1F5F9" }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: action.bg }}>
                <action.icon size={16} style={{ color: action.color }} />
              </div>
              <span style={{ color: "#374151", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 500 }}>{action.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Admission Trend Chart */}
      <div className="rounded-2xl bg-white p-4" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px" }}>Admission Trends</h3>
            <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>Queries vs Enrollments · 2025-26</p>
          </div>
          <span className="px-2.5 py-1 rounded-full" style={{ background: "#EFF6FF", color: "#2563EB", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}>
            Annual
          </span>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={ADMISSION_TREND}>
            <defs>
              <linearGradient id="mgps-grad-queries" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="mgps-grad-enrolled" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#059669" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#059669" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid key="area-grid" strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis key="area-xaxis" dataKey="month" tick={{ fontSize: 10, fill: "#94A3B8", fontFamily: "Inter, sans-serif" }} axisLine={false} tickLine={false} />
            <YAxis key="area-yaxis" tick={{ fontSize: 10, fill: "#94A3B8", fontFamily: "Inter, sans-serif" }} axisLine={false} tickLine={false} width={28} />
            <Tooltip key="area-tooltip" contentStyle={{ borderRadius: "10px", border: "1px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "11px" }} />
            <Legend key="area-legend" iconType="circle" iconSize={7} wrapperStyle={{ fontSize: "11px", fontFamily: "Inter, sans-serif" }} />
            <Area key="area-queries" type="monotone" dataKey="queries" name="Queries" stroke="#2563EB" fill="url(#mgps-grad-queries)" strokeWidth={2} dot={false} />
            <Area key="area-enrolled" type="monotone" dataKey="enrolled" name="Enrolled" stroke="#059669" fill="url(#mgps-grad-enrolled)" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Website Activity */}
      <div className="rounded-2xl bg-white p-4" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}>
        <div className="mb-4">
          <h3 style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px" }}>Website Activity</h3>
          <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>This week · Visits & Page Views</p>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={ACTIVITY_DATA} barGap={4}>
            <CartesianGrid key="bar-grid" strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis key="bar-xaxis" dataKey="day" tick={{ fontSize: 10, fill: "#94A3B8", fontFamily: "Inter, sans-serif" }} axisLine={false} tickLine={false} />
            <YAxis key="bar-yaxis" tick={{ fontSize: 10, fill: "#94A3B8", fontFamily: "Inter, sans-serif" }} axisLine={false} tickLine={false} width={28} />
            <Tooltip key="bar-tooltip" contentStyle={{ borderRadius: "10px", border: "1px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "11px" }} />
            <Bar key="bar-visits" dataKey="visits" name="Visits" fill="#2563EB" radius={[4, 4, 0, 0]} />
            <Bar key="bar-pageviews" dataKey="pageViews" name="Page Views" fill="#BFDBFE" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Queries */}
      <div className="rounded-2xl bg-white p-4" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}>
        <div className="flex items-center justify-between mb-3">
          <h3 style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px" }}>Recent Queries</h3>
          <span className="px-2.5 py-0.5 rounded-full" style={{ background: "#FEF3C7", color: "#D97706", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}>3 New</span>
        </div>
        <div className="space-y-2">
          {QUERIES_DATA.slice(0, 4).map(q => (
            <div key={q.id} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#F8FAFC" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
                <span style={{ color: "#2563EB", fontSize: "12px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>{q.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }} className="truncate">{q.name} <span style={{ fontWeight: 400, color: "#94A3B8" }}>· {q.class}</span></p>
                <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "11px" }} className="truncate">{q.message}</p>
              </div>
              <span
                className="flex-shrink-0 px-2 py-0.5 rounded-full"
                style={{
                  background: q.status === "New" ? "#DCFCE7" : q.status === "Contacted" ? "#DBEAFE" : "#F1F5F9",
                  color: q.status === "New" ? "#16A34A" : q.status === "Contacted" ? "#2563EB" : "#64748B",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                }}
              >
                {q.status}
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={() => setActiveSection("queries")}
          className="mt-3 w-full py-2 rounded-xl text-center"
          style={{ background: "#F8FAFC", color: "#2563EB", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, border: "1px solid #E2E8F0" }}
        >
          View All Queries →
        </button>
      </div>
    </div>
  );
}

// ─── IMAGES SECTION ───────────────────────────────────────────────────────────
function ImagesSection({ showToast }: { showToast: (msg: string) => void }) {
  const [activeTag, setActiveTag] = useState("All");
  const [images, setImages] = useState(GALLERY_IMAGES);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const tags = ["All", "Students", "Campus", "Events"];
  const filtered = activeTag === "All" ? images : images.filter(i => i.tag === activeTag);

  return (
    <div className="space-y-4">
      <SectionHeader
        title="Manage Images"
        subtitle={`${images.length} images uploaded`}
        action={
          <button
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)", fontFamily: "Inter, sans-serif", fontSize: "13px", boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}
          >
            <Upload size={14} /> Upload
          </button>
        }
      />
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={() => showToast("Image uploaded successfully!")} />

      {/* Drag & Drop */}
      <div
        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={e => { e.preventDefault(); setDragOver(false); showToast("Image uploaded successfully!"); }}
        className="rounded-2xl border-2 border-dashed flex flex-col items-center justify-center py-8 gap-2 transition-all cursor-pointer"
        style={{ borderColor: dragOver ? "#2563EB" : "#CBD5E1", background: dragOver ? "#EFF6FF" : "#F8FAFC" }}
        onClick={() => fileRef.current?.click()}
      >
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "#EFF6FF" }}>
          <Camera size={18} color="#2563EB" />
        </div>
        <p style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px" }}>Tap to upload images</p>
        <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>PNG, JPG, WEBP · max 10MB</p>
      </div>

      {/* Tags filter */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className="px-4 py-1.5 rounded-full flex-shrink-0 transition-all"
            style={{
              background: activeTag === tag ? "#2563EB" : "#F1F5F9",
              color: activeTag === tag ? "#fff" : "#64748B",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filtered.map(img => (
          <motion.div
            key={img.id}
            layout
            className="rounded-2xl overflow-hidden group relative bg-white"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
          >
            <div className="relative" style={{ height: "140px" }}>
              <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button onClick={() => showToast("Opening editor...")} className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                  <Edit3 size={13} color="#0F172A" />
                </button>
                <button
                  onClick={() => { setImages(prev => prev.filter(i => i.id !== img.id)); showToast("Image deleted."); }}
                  className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center"
                >
                  <Trash2 size={13} color="#DC2626" />
                </button>
              </div>
              {/* Mobile action buttons - always visible */}
              <div className="absolute top-2 right-2 flex gap-1 lg:hidden">
                <button onClick={() => { setImages(prev => prev.filter(i => i.id !== img.id)); showToast("Image deleted."); }}
                  className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "rgba(220,38,38,0.85)" }}>
                  <Trash2 size={11} color="#fff" />
                </button>
              </div>
            </div>
            <div className="p-2.5 flex items-center justify-between">
              <p style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }} className="truncate flex-1">{img.title}</p>
              <span
                className="flex-shrink-0 ml-1.5 px-1.5 py-0.5 rounded-full"
                style={{ background: `${TAG_COLORS[img.tag]}15`, color: TAG_COLORS[img.tag], fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 600 }}
              >
                {img.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── PARENTS SECTION ──────────────────────────────────────────────────────────
function ParentsSection() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const filtered = PARENTS_DATA.filter(p =>
    (filter === "All" || p.status === filter) &&
    (p.parentName.toLowerCase().includes(search.toLowerCase()) ||
      p.studentName.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      <SectionHeader title="Parents Login Data" subtitle="Registered parent accounts & activity" />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#94A3B8" }} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search parent or student…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl outline-none"
            style={{ background: "#fff", border: "1.5px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#0F172A" }}
          />
        </div>
        <div className="flex gap-2">
          {["All", "Active", "Inactive"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl transition-all"
              style={{
                background: filter === f ? "#0F172A" : "#fff",
                color: filter === f ? "#fff" : "#64748B",
                border: "1.5px solid #E2E8F0",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>
        Showing {filtered.length} of {PARENTS_DATA.length} entries
      </p>

      {/* Mobile: Card List | Desktop: Table */}
      <div className="lg:hidden space-y-3">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="rounded-2xl bg-white p-4"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
                <span style={{ color: "#2563EB", fontSize: "14px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>{p.parentName[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px" }} className="truncate">{p.parentName}</p>
                <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>Ward: <span style={{ color: "#374151" }}>{p.studentName}</span> · <span style={{ background: "#F1F5F9", color: "#475569", padding: "1px 6px", borderRadius: "6px", fontSize: "11px" }}>{p.class}</span></p>
              </div>
              <span
                className="px-2.5 py-1 rounded-full flex-shrink-0"
                style={{
                  background: p.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                  color: p.status === "Active" ? "#16A34A" : "#DC2626",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                }}
              >
                {p.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-50">
              <div className="flex items-center gap-1.5">
                <Phone size={11} style={{ color: "#94A3B8" }} />
                <span style={{ color: "#374151", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>{p.contact}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={11} style={{ color: "#94A3B8" }} />
                <span style={{ color: "#64748B", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>{p.lastLogin}</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2">
                <Mail size={11} style={{ color: "#94A3B8" }} />
                <span style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "11px" }} className="truncate">{p.email}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: Table */}
      <div className="hidden lg:block rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: "#F8FAFC", borderBottom: "1px solid #F1F5F9" }}>
                {["Parent Name", "Student", "Class", "Contact", "Last Login", "Status", "Action"].map(h => (
                  <th key={h} className="px-5 py-3.5 text-left" style={{ color: "#64748B", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-50">
              {filtered.map((p, i) => (
                <motion.tr key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
                        <span style={{ color: "#2563EB", fontSize: "12px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>{p.parentName[0]}</span>
                      </div>
                      <span style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500 }}>{p.parentName}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4" style={{ color: "#374151", fontFamily: "Inter, sans-serif", fontSize: "13px" }}>{p.studentName}</td>
                  <td className="px-5 py-4">
                    <span className="px-2.5 py-1 rounded-lg" style={{ background: "#F1F5F9", color: "#475569", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }}>{p.class}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-0.5">
                      <span style={{ color: "#374151", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>{p.contact}</span>
                      <span style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>{p.email}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4" style={{ color: "#64748B", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>{p.lastLogin}</td>
                  <td className="px-5 py-4">
                    <span
                      className="px-2.5 py-1 rounded-full"
                      style={{
                        background: p.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                        color: p.status === "Active" ? "#16A34A" : "#DC2626",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                      }}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg" style={{ background: "#EFF6FF", color: "#2563EB", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }}>
                      <Eye size={12} /> View
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-3 border-t" style={{ borderColor: "#F1F5F9", background: "#FAFAFA" }}>
          <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>Showing {filtered.length} of {PARENTS_DATA.length}</p>
          <div className="flex gap-1">
            {[1, 2, 3].map(n => (
              <button key={n} className="w-8 h-8 rounded-lg" style={{ background: n === 1 ? "#2563EB" : "#F1F5F9", color: n === 1 ? "#fff" : "#64748B", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }}>{n}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── QUERIES SECTION ──────────────────────────────────────────────────────────
function QueriesSection({ showToast }: { showToast: (msg: string) => void }) {
  const [queries, setQueries] = useState(QUERIES_DATA);
  const [filterStatus, setFilterStatus] = useState("All");

  const markContacted = (id: number) => {
    setQueries(prev => prev.map(q => q.id === id ? { ...q, status: "Contacted" } : q));
    showToast("Marked as contacted!");
  };
  const archive = (id: number) => {
    setQueries(prev => prev.map(q => q.id === id ? { ...q, status: "Archived" } : q));
    showToast("Query archived.");
  };
  const remove = (id: number) => {
    setQueries(prev => prev.filter(q => q.id !== id));
    showToast("Query deleted.");
  };

  const filtered = filterStatus === "All" ? queries : queries.filter(q => q.status === filterStatus);

  return (
    <div className="space-y-4">
      <SectionHeader
        title="Admission Queries"
        subtitle={`${queries.filter(q => q.status === "New").length} new · ${queries.length} total`}
      />

      {/* Status filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {["All", "New", "Contacted", "Archived"].map(s => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className="px-4 py-2 rounded-xl flex-shrink-0 transition-all"
            style={{
              background: filterStatus === s ? "#0F172A" : "#fff",
              color: filterStatus === s ? "#fff" : "#64748B",
              border: "1.5px solid #E2E8F0",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {filtered.map((q, i) => (
          <motion.div
            key={q.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl p-4 bg-white"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: `1.5px solid ${q.status === "New" ? "#BFDBFE" : "#F1F5F9"}` }}
          >
            <div className="flex items-start justify-between mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
                  <span style={{ color: "#2563EB", fontWeight: 700, fontSize: "13px", fontFamily: "Inter, sans-serif" }}>{q.name[0]}</span>
                </div>
                <div>
                  <p style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px" }}>{q.name}</p>
                  <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>{q.class}</p>
                </div>
              </div>
              <span
                className="px-2 py-0.5 rounded-full flex-shrink-0"
                style={{
                  background: q.status === "New" ? "#DCFCE7" : q.status === "Contacted" ? "#DBEAFE" : "#F1F5F9",
                  color: q.status === "New" ? "#16A34A" : q.status === "Contacted" ? "#2563EB" : "#94A3B8",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                }}
              >
                {q.status}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-2.5">
              <div className="flex items-center gap-1">
                <Phone size={11} style={{ color: "#94A3B8" }} />
                <span style={{ color: "#374151", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>{q.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={11} style={{ color: "#94A3B8" }} />
                <span style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>{q.date}</span>
              </div>
            </div>

            <p style={{ color: "#64748B", fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: 1.5 }} className="mb-3 line-clamp-2">{q.message}</p>

            <div className="flex gap-2 flex-wrap">
              {q.status !== "Contacted" && q.status !== "Archived" && (
                <button
                  onClick={() => markContacted(q.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                  style={{ background: "#DCFCE7", color: "#16A34A", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}
                >
                  <CheckSquare size={11} /> Contacted
                </button>
              )}
              {q.status !== "Archived" && (
                <button
                  onClick={() => archive(q.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                  style={{ background: "#F1F5F9", color: "#64748B", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}
                >
                  <Archive size={11} /> Archive
                </button>
              )}
              <button
                onClick={() => remove(q.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                style={{ background: "#FEF2F2", color: "#DC2626", fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}
              >
                <Trash2 size={11} /> Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="py-12 flex flex-col items-center gap-2" style={{ color: "#94A3B8" }}>
          <MessageSquare size={32} style={{ opacity: 0.4 }} />
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>No queries found</p>
        </div>
      )}
    </div>
  );
}

// ─── POSTERS SECTION ──────────────────────────────────────────────────────────
function PostersSection({ showToast }: { showToast: (msg: string) => void }) {
  const [posters, setPosters] = useState(POSTERS);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("Event");
  const [schedule, setSchedule] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setPreview(URL.createObjectURL(f));
  };

  const handlePublish = () => {
    if (!title.trim()) { showToast("Please enter a title."); return; }
    setPosters(prev => [
      { id: Date.now(), title, desc, status: schedule ? "Scheduled" : "Published", tag, date: "Apr 10, 2026" },
      ...prev,
    ]);
    setTitle(""); setDesc(""); setPreview(null); setSchedule(""); setShowForm(false);
    showToast(schedule ? "Poster scheduled!" : "Poster published successfully!");
  };

  return (
    <div className="space-y-4">
      <SectionHeader
        title="Poster / Notice Upload"
        subtitle="Publish announcements & notices"
        action={
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)", fontFamily: "Inter, sans-serif", fontSize: "13px", boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}
          >
            {showForm ? <X size={14} /> : <Plus size={14} />} {showForm ? "Cancel" : "New Poster"}
          </button>
        }
      />

      {/* Create Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-2xl bg-white p-4 space-y-3" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}>
              <h3 style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px" }}>Create New Poster</h3>

              <div
                onClick={() => fileRef.current?.click()}
                className="rounded-xl border-2 border-dashed flex flex-col items-center justify-center py-5 gap-2 cursor-pointer hover:border-blue-400 transition-all"
                style={{ borderColor: "#CBD5E1", background: "#F8FAFC" }}
              >
                {preview ? (
                  <img src={preview} alt="Preview" className="w-full h-28 object-cover rounded-lg" />
                ) : (
                  <>
                    <Upload size={18} color="#94A3B8" />
                    <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>Tap to upload poster image</p>
                  </>
                )}
              </div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />

              <div>
                <label style={{ color: "#475569", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }} className="block mb-1">Title *</label>
                <input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g. Annual Sports Day 2026"
                  className="w-full px-3.5 py-2.5 rounded-xl outline-none"
                  style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#0F172A" }}
                />
              </div>
              <div>
                <label style={{ color: "#475569", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }} className="block mb-1">Description</label>
                <textarea
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  rows={2}
                  placeholder="Brief description…"
                  className="w-full px-3.5 py-2.5 rounded-xl outline-none resize-none"
                  style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#0F172A" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label style={{ color: "#475569", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }} className="block mb-1">Tag</label>
                  <select
                    value={tag}
                    onChange={e => setTag(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl outline-none"
                    style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#0F172A" }}
                  >
                    <option>Event</option>
                    <option>Notice</option>
                    <option>Meeting</option>
                    <option>Holiday</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: "#475569", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }} className="block mb-1">Schedule (opt.)</label>
                  <input
                    type="date"
                    value={schedule}
                    onChange={e => setSchedule(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl outline-none"
                    style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#0F172A" }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handlePublish}
                  className="flex-1 py-2.5 rounded-xl font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)", fontFamily: "Inter, sans-serif", fontSize: "13px", boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}
                >
                  {schedule ? "Schedule" : "Publish Now"}
                </motion.button>
                <button
                  onClick={() => { setTitle(""); setDesc(""); setPreview(null); }}
                  className="px-4 py-2.5 rounded-xl"
                  style={{ background: "#F1F5F9", color: "#64748B", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600 }}
                >
                  Clear
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Posters List */}
      <div className="space-y-3">
        {posters.map((p, i) => (
          <motion.div
            key={p.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 p-4 rounded-2xl bg-white"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)", border: "1.5px solid #F1F5F9" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
              <Megaphone size={17} color="#2563EB" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <p style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px" }} className="truncate">{p.title}</p>
                <span
                  className="flex-shrink-0 px-2 py-0.5 rounded-full"
                  style={{
                    background: p.status === "Published" ? "#DCFCE7" : "#FEF3C7",
                    color: p.status === "Published" ? "#16A34A" : "#D97706",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                  }}
                >
                  {p.status}
                </span>
              </div>
              <p style={{ color: "#64748B", fontFamily: "Inter, sans-serif", fontSize: "12px" }} className="line-clamp-1 mb-1.5">{p.desc || "No description"}</p>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full" style={{ background: "#F1F5F9", color: "#64748B", fontFamily: "Inter, sans-serif", fontSize: "10px" }}>{p.tag}</span>
                <span style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>{p.date}</span>
              </div>
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#F1F5F9" }} onClick={() => showToast("Opening editor…")}>
                <Edit3 size={13} color="#64748B" />
              </button>
              <button
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "#FEF2F2" }}
                onClick={() => { setPosters(prev => prev.filter(x => x.id !== p.id)); showToast("Poster removed."); }}
              >
                <Trash2 size={13} color="#DC2626" />
              </button>
            </div>
          </motion.div>
        ))}
        {posters.length === 0 && (
          <div className="py-12 flex flex-col items-center gap-2" style={{ color: "#94A3B8" }}>
            <Megaphone size={32} style={{ opacity: 0.4 }} />
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>No posters yet</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SETTINGS SECTION ─────────────────────────────────────────────────────────
function SettingsSection({ showToast, onLogout }: { showToast: (msg: string) => void; onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<"profile" | "password" | "school">("profile");
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@mgps.edu.in");
  const [phone, setPhone] = useState("+91 98765 00000");
  const [schoolName, setSchoolName] = useState("Maariya Gold Public School");
  const [address, setAddress] = useState("Maruti Kunj, Bhondsi, Gurugram, Haryana 122102");
  const [cbse, setCbse] = useState("AF-232-2012");

  const TABS = [
    { key: "profile", label: "Profile", icon: User },
    { key: "password", label: "Password", icon: Lock },
    { key: "school", label: "School", icon: School },
  ] as const;

  return (
    <div className="space-y-4">
      <SectionHeader title="Settings" subtitle="Manage profile, security & school info" />

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-2xl p-1.5" style={{ border: "1.5px solid #E2E8F0" }}>
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl transition-all"
            style={{
              background: activeTab === t.key ? "#0F172A" : "transparent",
              color: activeTab === t.key ? "#fff" : "#64748B",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            <t.icon size={13} /> <span className="hidden sm:inline">{t.label}</span>
            <span className="sm:hidden">{t.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "profile" && (
          <motion.div key="profile" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="rounded-2xl bg-white p-4 space-y-4"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}>
                <span style={{ color: "#fff", fontSize: "20px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>A</span>
              </div>
              <div>
                <p style={{ color: "#0F172A", fontWeight: 600, fontFamily: "Inter, sans-serif", fontSize: "14px" }}>{name}</p>
                <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>Super Admin</p>
              </div>
            </div>
            {[
              { label: "Full Name", value: name, set: setName, icon: User },
              { label: "Email Address", value: email, set: setEmail, icon: Mail },
              { label: "Phone Number", value: phone, set: setPhone, icon: Phone },
            ].map(field => (
              <div key={field.label}>
                <label style={{ color: "#475569", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }} className="block mb-1">{field.label}</label>
                <div className="relative">
                  <field.icon size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#94A3B8" }} />
                  <input
                    value={field.value}
                    onChange={e => field.set(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl outline-none"
                    style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#0F172A" }}
                  />
                </div>
              </div>
            ))}
            <button onClick={() => showToast("Profile updated successfully!")} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white"
              style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}>
              <Save size={14} /> Save Profile
            </button>
          </motion.div>
        )}

        {activeTab === "password" && (
          <motion.div key="password" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="rounded-2xl bg-white p-4 space-y-4"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}
          >
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
              <AlertCircle size={14} color="#D97706" />
              <p style={{ color: "#92400E", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>Use a strong password with letters, numbers & symbols.</p>
            </div>
            {[
              { label: "Current Password", placeholder: "Enter current password" },
              { label: "New Password", placeholder: "Enter new password" },
              { label: "Confirm New Password", placeholder: "Re-enter new password" },
            ].map(f => (
              <div key={f.label}>
                <label style={{ color: "#475569", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }} className="block mb-1">{f.label}</label>
                <div className="relative">
                  <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#94A3B8" }} />
                  <input type="password" placeholder={f.placeholder} className="w-full pl-9 pr-4 py-2.5 rounded-xl outline-none"
                    style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#0F172A" }} />
                </div>
              </div>
            ))}
            <button onClick={() => showToast("Password changed successfully!")} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white"
              style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}>
              <Shield size={14} /> Update Password
            </button>
          </motion.div>
        )}

        {activeTab === "school" && (
          <motion.div key="school" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="rounded-2xl bg-white p-4 space-y-4"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #F1F5F9" }}
          >
            {[
              { label: "School Name", value: schoolName, set: setSchoolName },
              { label: "Address", value: address, set: setAddress },
              { label: "CBSE Affiliation No.", value: cbse, set: setCbse },
            ].map(f => (
              <div key={f.label}>
                <label style={{ color: "#475569", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }} className="block mb-1">{f.label}</label>
                <input value={f.value} onChange={e => f.set(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl outline-none"
                  style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#0F172A" }} />
              </div>
            ))}
            <button onClick={() => showToast("School info saved!")} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white"
              style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}>
              <Save size={14} /> Save School Info
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Danger Zone */}
      <div className="rounded-2xl bg-white p-4" style={{ border: "1.5px solid #FEE2E2" }}>
        <p style={{ color: "#DC2626", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", marginBottom: "8px" }}>Danger Zone</p>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl w-full sm:w-auto"
          style={{ background: "#FEF2F2", color: "#DC2626", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, border: "1.5px solid #FECACA" }}
        >
          <LogOut size={14} /> Logout & Return to Website
        </button>
      </div>
    </div>
  );
}

// ─── MAIN ADMIN PANEL ─────────────────────────────────────────────────────────
function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const sectionLabel = NAV_ITEMS.find(n => n.key === activeSection)?.label ?? "Dashboard";

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard": return <DashboardSection setActiveSection={setActiveSection} />;
      case "images": return <ImagesSection showToast={showToast} />;
      case "parents": return <ParentsSection />;
      case "queries": return <QueriesSection showToast={showToast} />;
      case "posters": return <PostersSection showToast={showToast} />;
      case "settings": return <SettingsSection showToast={showToast} onLogout={onLogout} />;
      default: return <DashboardSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#F0F4F8", fontFamily: "Inter, sans-serif" }}>

      {/* ── DESKTOP SIDEBAR ── */}
      <aside
        className="hidden lg:flex flex-col flex-shrink-0"
        style={{ width: "220px", background: "#0F172A", boxShadow: "4px 0 24px rgba(0,0,0,0.12)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1D4ED8, #3B82F6)" }}>
            <School size={16} color="white" />
          </div>
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "12px", lineHeight: 1.2 }}>MGPS Admin</p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}>Control Panel</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2.5 py-3 space-y-0.5 overflow-y-auto">
          <p className="px-3 mb-2" style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Menu</p>
          {NAV_ITEMS.map(item => (
            <motion.button
              key={item.key}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection(item.key)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all"
              style={{
                background: activeSection === item.key ? "rgba(37,99,235,0.2)" : "transparent",
                color: activeSection === item.key ? "#60A5FA" : "rgba(255,255,255,0.55)",
                fontSize: "13px",
                fontWeight: activeSection === item.key ? 600 : 400,
                borderLeft: activeSection === item.key ? "3px solid #2563EB" : "3px solid transparent",
              }}
            >
              <item.icon size={16} />
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-2.5 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all"
            style={{ color: "rgba(248,113,113,0.8)", fontSize: "13px" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(220,38,38,0.12)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* ── MAIN AREA ── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">

        {/* Top Header */}
        <header
          className="flex-shrink-0 flex items-center gap-3 px-4 py-3"
          style={{ background: "#fff", boxShadow: "0 1px 0 #F1F5F9", zIndex: 20 }}
        >
          {/* School name on mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1D4ED8, #3B82F6)" }}>
              <School size={13} color="white" />
            </div>
            <span style={{ color: "#0F172A", fontWeight: 700, fontSize: "13px", fontFamily: "Inter, sans-serif" }}>MGPS</span>
          </div>

          {/* Section title on desktop */}
          <span className="hidden lg:block" style={{ color: "#0F172A", fontWeight: 700, fontSize: "15px", fontFamily: "Inter, sans-serif" }}>{sectionLabel}</span>

          {/* Search - hidden on smallest screens */}
          <div className="relative flex-1 max-w-xs hidden sm:block">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#94A3B8" }} />
            <input
              placeholder="Search…"
              className="w-full pl-8 pr-4 py-2 rounded-xl outline-none"
              style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#374151" }}
            />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}
                className="relative w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0" }}
              >
                <Bell size={14} color="#374151" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white flex items-center justify-center" style={{ background: "#EF4444", fontSize: "8px", fontWeight: 700 }}>3</span>
              </button>
              <AnimatePresence>
                {notifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-10 rounded-2xl overflow-hidden z-50"
                    style={{ width: "280px", background: "#fff", boxShadow: "0 16px 50px rgba(0,0,0,0.14)", border: "1px solid #F1F5F9" }}
                  >
                    <div className="px-4 py-3 border-b" style={{ borderColor: "#F1F5F9" }}>
                      <p style={{ fontWeight: 600, fontSize: "13px", color: "#0F172A", fontFamily: "Inter, sans-serif" }}>Notifications</p>
                    </div>
                    {[
                      { text: "New admission query from Harsh Bansal", time: "5 min ago", dot: "#EF4444" },
                      { text: "6 new parent logins today", time: "1 hour ago", dot: "#2563EB" },
                      { text: "Sports Day poster published", time: "2 hours ago", dot: "#16A34A" },
                    ].map((n, i) => (
                      <div key={i} className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer border-b last:border-0" style={{ borderColor: "#F8FAFC" }}>
                        <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: n.dot }} />
                        <div>
                          <p style={{ fontSize: "12px", color: "#374151", fontFamily: "Inter, sans-serif" }}>{n.text}</p>
                          <p style={{ fontSize: "11px", color: "#94A3B8", fontFamily: "Inter, sans-serif" }}>{n.time}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl"
                style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0" }}
              >
                <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}>
                  <span style={{ color: "#fff", fontSize: "10px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>A</span>
                </div>
                <span className="hidden sm:block" style={{ fontSize: "12px", fontWeight: 500, color: "#374151", fontFamily: "Inter, sans-serif" }}>Admin</span>
                <ChevronDown size={11} color="#94A3B8" />
              </button>
              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-11 rounded-2xl overflow-hidden z-50"
                    style={{ width: "180px", background: "#fff", boxShadow: "0 16px 50px rgba(0,0,0,0.14)", border: "1px solid #F1F5F9" }}
                  >
                    <div className="px-4 py-3 border-b" style={{ borderColor: "#F1F5F9" }}>
                      <p style={{ fontWeight: 600, fontSize: "13px", color: "#0F172A", fontFamily: "Inter, sans-serif" }}>Admin User</p>
                      <p style={{ fontSize: "11px", color: "#94A3B8", fontFamily: "Inter, sans-serif" }}>Super Admin</p>
                    </div>
                    <button
                      onClick={() => { setProfileOpen(false); setActiveSection("settings"); }}
                      className="w-full flex items-center gap-2.5 px-4 py-3 hover:bg-slate-50 transition-colors"
                      style={{ color: "#374151", fontFamily: "Inter, sans-serif", fontSize: "13px" }}
                    >
                      <Settings size={14} color="#94A3B8" /> Settings
                    </button>
                    <button
                      onClick={onLogout}
                      className="w-full flex items-center gap-2.5 px-4 py-3 hover:bg-red-50 transition-colors border-t"
                      style={{ color: "#DC2626", fontFamily: "Inter, sans-serif", fontSize: "13px", borderColor: "#F1F5F9" }}
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 pb-24 lg:pb-6 lg:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-30 flex items-center"
        style={{ background: "#0F172A", boxShadow: "0 -2px 20px rgba(0,0,0,0.18)", height: "64px" }}
      >
        {NAV_ITEMS.map(item => {
          const isActive = activeSection === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className="flex-1 flex flex-col items-center justify-center gap-1 h-full transition-all relative"
              style={{ color: isActive ? "#60A5FA" : "rgba(255,255,255,0.4)" }}
            >
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
                  style={{ width: "24px", height: "3px", background: "#2563EB" }}
                />
              )}
              <item.icon size={18} />
              <span style={{ fontSize: "9px", fontWeight: isActive ? 700 : 500, fontFamily: "Inter, sans-serif" }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Toast */}
      <AnimatePresence>
        {toast && <Toast message={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </div>
  );
}

// ─── LOGIN SCREEN ─────────────────────────────────────────────────────────────
function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (username.trim().toUpperCase() === "MGPS" && password.trim().toUpperCase() === "MARUTI GANJ") {
        onSuccess();
      } else {
        setError("Invalid username or password. Please try again.");
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A192F 0%, #162d4f 60%, #0A192F 100%)" }}
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: "#D4AF37", filter: "blur(80px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10"
          style={{ background: "#A3B18A", filter: "blur(60px)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-sm"
      >
        <div
          className="rounded-3xl p-8"
          style={{
            background: "rgba(255,255,255,0.97)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
          }}
        >
          {/* Logo / Badge */}
          <div className="flex flex-col items-center mb-7">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
              style={{ background: "linear-gradient(135deg, #0A192F, #162d4f)", boxShadow: "0 8px 24px rgba(10,25,47,0.3)" }}
            >
              <Shield size={28} style={{ color: "#D4AF37" }} />
            </div>
            <h2 style={{ color: "#0A192F", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "20px", letterSpacing: "-0.3px" }}>
              Admin Panel
            </h2>
            <p style={{ color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: "12px", marginTop: "4px" }}>
              Maariya Gold Public School
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username */}
            <div>
              <label style={{ color: "#374151", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }}>
                Username
              </label>
              <div className="relative mt-1.5">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <User size={15} style={{ color: "#94A3B8" }} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={e => { setUsername(e.target.value); setError(""); }}
                  placeholder="Enter username"
                  autoComplete="username"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl outline-none transition-all"
                  style={{
                    border: error ? "1.5px solid #DC2626" : "1.5px solid #E2E8F0",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#0F172A",
                    background: "#F8FAFC",
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={{ color: "#374151", fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600 }}>
                Password
              </label>
              <div className="relative mt-1.5">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Lock size={15} style={{ color: "#94A3B8" }} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(""); }}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  className="w-full pl-9 pr-10 py-2.5 rounded-xl outline-none transition-all"
                  style={{
                    border: error ? "1.5px solid #DC2626" : "1.5px solid #E2E8F0",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#0F172A",
                    background: "#F8FAFC",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "#94A3B8" }}
                >
                  <Eye size={15} />
                </button>
              </div>
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}
                >
                  <AlertCircle size={13} style={{ color: "#DC2626", flexShrink: 0 }} />
                  <p style={{ color: "#DC2626", fontFamily: "Inter, sans-serif", fontSize: "12px" }}>{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 mt-1"
              style={{
                background: loading ? "#94A3B8" : "linear-gradient(135deg, #0A192F, #1e3a5f)",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                boxShadow: loading ? "none" : "0 6px 20px rgba(10,25,47,0.3)",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? (
                <>
                  <RefreshCw size={14} className="animate-spin" /> Verifying...
                </>
              ) : (
                <>
                  <Lock size={14} /> Login to Admin Panel
                </>
              )}
            </motion.button>
          </form>

          {/* Footer note */}
          <p className="text-center mt-5" style={{ color: "#CBD5E1", fontFamily: "Inter, sans-serif", fontSize: "11px" }}>
            🔒 Secured access · Authorised personnel only
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function AdminPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AdminLogin onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <AdminPanel onLogout={() => { setIsAuthenticated(false); navigate("/"); }} />;
}
