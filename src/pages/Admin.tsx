import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Eye, RefreshCw, LogOut, Lock, Copy, Webhook, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ADMIN_PASSWORD = "raga2025admin";

const WEBHOOK_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/publish-blog-post`;

const SAMPLE_PAYLOAD = {
  title: "How Long Do Dental Implants Really Last? A Clinical Perspective",
  slug: "how-long-do-dental-implants-last",
  category: "Implantology",
  tags: ["dental implants", "longevity", "osseointegration"],
  image_url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200",
  hero_image_alt: "Close-up of a titanium dental implant model",
  author: "Dr. Baskaran",
  author_role: "Chief Implantologist, Raga Dental",
  meta_title: "Dental Implant Longevity Explained | Raga Dental",
  meta_description: "Clinical answer to how long dental implants last, with the factors that decide 10 vs 30+ year outcomes.",
  excerpt: "An evidence-based look at the biological and surgical factors that determine whether implants last a decade or a lifetime.",
  content_html: "<p>Dental implants are designed as a permanent restorative solution, but their actual lifespan depends on a chain of clinical and patient factors.</p><h2 id='osseointegration'>The role of osseointegration</h2><p>The titanium fixture fuses with bone over 8–12 weeks. This biological bond is the single biggest predictor of long-term success.</p><h2 id='factors'>What determines longevity</h2><ul><li><strong>Bone quality</strong> at the implant site</li><li><strong>Surgical precision</strong> and guided placement</li><li><strong>Oral hygiene</strong> and recall visits</li><li><strong>Systemic health</strong> — diabetes, smoking, bisphosphonates</li></ul><h2 id='outcomes'>Documented outcomes</h2><p>Peer-reviewed 20-year follow-up studies report survival rates above 90% in well-maintained cases. Failures cluster in the first 18 months when they occur.</p>",
  internal_links: [
    { anchor: "guided placement", url: "/implantology" },
    { anchor: "recall visits", url: "/contact" }
  ],
  external_links: [
    { anchor: "peer-reviewed 20-year follow-up studies", url: "https://pubmed.ncbi.nlm.nih.gov/?term=dental+implant+20+year+survival" }
  ],
  faq: [
    { question: "How long do dental implants last on average?", answer: "Well-maintained implants routinely last 20+ years, with documented cases beyond 30 years. Crowns on top may need replacement every 10–15 years." },
    { question: "What is the most common reason implants fail?", answer: "Peri-implantitis — inflammation from biofilm — is the leading cause. It is largely preventable with hygiene and recall visits." },
    { question: "Can smokers get dental implants?", answer: "Yes, but smoking measurably lowers success rates. We counsel cessation before and during healing." }
  ],
  eeat: {
    author_bio: "Implantologist with 20+ years of full-arch and complex rehabilitation experience at Raga Dental, Thanjavur.",
    author_credentials: ["BDS", "MDS Prosthodontics", "Fellow ICOI"],
    experience_note: "Based on over 5,000 implant placements documented across the Raga Dental clinical archive.",
    reviewed_by: "Dr. Baskaran",
    reviewer_credentials: "Chief Implantologist",
    medically_reviewed_date: "2026-05-19",
    sources: [
      { title: "Branemark, P-I. Osseointegration and its experimental background.", url: "https://pubmed.ncbi.nlm.nih.gov/6352924/" },
      { title: "Moraschini V, et al. Long-term survival of dental implants.", url: "https://pubmed.ncbi.nlm.nih.gov/25467739/" }
    ]
  },
  featured: true,
  status: "published"
};

interface ConsultationRequest {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  inquiry: string;
  status: string;
  created_at: string;
}

interface DbBlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  published_at: string;
  status: string;
}

export default function Admin() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [requests, setRequests] = useState<ConsultationRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<ConsultationRequest | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [blogPosts, setBlogPosts] = useState<DbBlogPost[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchRequests();
      fetchBlogPosts();
    } else {
      toast({ title: "Invalid Password", description: "Please try again.", variant: "destructive" });
    }
  };

  const fetchRequests = async () => {
    setLoading(true);
    // Use anon key directly since we're doing password-based admin access
    const { data, error } = await supabase
      .from("consultation_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Error fetching data", description: error.message, variant: "destructive" });
    } else {
      setRequests(data || []);
    }
    setLoading(false);
  };

  const fetchBlogPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, category, published_at, status")
      .order("published_at", { ascending: false });
    if (!error) setBlogPosts((data || []) as DbBlogPost[]);
  };

  const deleteBlogPost = async (id: string) => {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Post deleted" });
      setBlogPosts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: `${label} copied` });
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("consultation_requests")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      toast({ title: "Error updating status", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Status Updated" });
      setRequests((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
      );
      if (selectedRequest?.id === id) {
        setSelectedRequest({ ...selectedRequest, status: newStatus });
      }
    }
  };

  const filtered = filterStatus === "all" ? requests : requests.filter((r) => r.status === filterStatus);

  const statusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800 border-blue-200";
      case "contacted": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "scheduled": return "bg-green-100 text-green-800 border-green-200";
      case "completed": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <div className="w-full max-w-sm">
          <div className="bg-background border rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h1 className="text-xl font-semibold text-center mb-1">Admin Console</h1>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Raga Dental — Consultation Management
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center"
              />
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Raga Dental Admin</h1>
            <p className="text-xs text-muted-foreground">Consultation Requests</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchRequests} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-1 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsAuthenticated(false)}>
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <Tabs defaultValue="consultations" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
            <TabsTrigger value="blog">Blog Webhook</TabsTrigger>
          </TabsList>

          <TabsContent value="consultations">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total", count: requests.length, color: "text-foreground" },
            { label: "New", count: requests.filter((r) => r.status === "new").length, color: "text-blue-600" },
            { label: "Contacted", count: requests.filter((r) => r.status === "contacted").length, color: "text-yellow-600" },
            { label: "Scheduled", count: requests.filter((r) => r.status === "scheduled").length, color: "text-green-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-background border rounded-lg p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              <p className={`text-2xl font-semibold ${stat.color}`}>{stat.count}</p>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div className="flex items-center gap-3 mb-4">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Filter status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">{filtered.length} results</span>
        </div>

        {/* Table */}
        <div className="bg-background border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden sm:table-cell">Date</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                    No consultation requests yet.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((req) => (
                  <TableRow key={req.id}>
                    <TableCell className="font-medium">
                      {req.first_name} {req.last_name}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{req.email}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{req.country}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-xs ${statusColor(req.status)}`}>
                        {req.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-muted-foreground text-sm">
                      {format(new Date(req.created_at), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => setSelectedRequest(req)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
          </TabsContent>

          <TabsContent value="blog">
            <div className="space-y-6">
              <div className="bg-background border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Webhook className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold">n8n Blog Publishing Webhook</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Configure an <strong>HTTP Request</strong> node in n8n with the settings below.
                  Any successful POST publishes the post immediately at <code>/blog/&lt;slug&gt;</code>.
                </p>

                <div className="space-y-4">
                  <Field label="Method" value="POST" onCopy={copy} />
                  <Field label="URL" value={WEBHOOK_URL} onCopy={copy} />
                  <Field label="Authentication" value="None (uses custom header below)" onCopy={copy} />
                  <Field label="Header name" value="x-webhook-secret" onCopy={copy} />
                  <Field label="Header value (the secret you saved)" value="(stored as BLOG_WEBHOOK_SECRET — paste the same value you saved into n8n)" onCopy={copy} />
                  <Field label="Header name (2)" value="Content-Type" onCopy={copy} />
                  <Field label="Header value (2)" value="application/json" onCopy={copy} />
                  <Field label="Send Query Parameters" value="OFF" onCopy={copy} />
                  <Field label="Send Body" value="ON · Body Content Type: JSON · Specify Body: Using JSON" onCopy={copy} />
                </div>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Sample JSON body (paste into n8n)</h3>
                  <Button variant="outline" size="sm" onClick={() => copy(JSON.stringify(SAMPLE_PAYLOAD, null, 2), "Sample payload")}>
                    <Copy className="w-4 h-4 mr-1" /> Copy JSON
                  </Button>
                </div>
                <pre className="text-xs bg-muted rounded-md p-4 overflow-auto max-h-96">
{JSON.stringify(SAMPLE_PAYLOAD, null, 2)}
                </pre>
                <p className="text-xs text-muted-foreground mt-3">
                  Required fields: <code>title</code>, <code>content_html</code>. Everything else has sensible defaults.
                  Includes <strong>FAQ</strong> (renders accordion + FAQ schema) and <strong>E-E-A-T</strong> (author credentials, medical reviewer, sources).
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Published posts ({blogPosts.length})</h3>
                  <Button variant="outline" size="sm" onClick={fetchBlogPosts}>
                    <RefreshCw className="w-4 h-4 mr-1" /> Refresh
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead className="hidden md:table-cell">Category</TableHead>
                      <TableHead className="hidden sm:table-cell">Published</TableHead>
                      <TableHead className="w-20"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogPosts.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8 text-muted-foreground text-sm">
                          No posts published via webhook yet.
                        </TableCell>
                      </TableRow>
                    ) : (
                      blogPosts.map((p) => (
                        <TableRow key={p.id}>
                          <TableCell>
                            <a href={`/blog/${p.slug}`} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                              {p.title}
                            </a>
                          </TableCell>
                          <TableCell className="hidden md:table-cell text-muted-foreground text-sm">{p.category}</TableCell>
                          <TableCell className="hidden sm:table-cell text-muted-foreground text-sm">
                            {format(new Date(p.published_at), "MMM d, yyyy")}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon" onClick={() => deleteBlogPost(p.id)}>
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Detail Dialog */}
      <Dialog open={!!selectedRequest} onOpenChange={() => setSelectedRequest(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {selectedRequest?.first_name} {selectedRequest?.last_name}
            </DialogTitle>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">{selectedRequest.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium">{selectedRequest.phone}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Country</p>
                  <p className="font-medium">{selectedRequest.country}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Submitted</p>
                  <p className="font-medium">
                    {format(new Date(selectedRequest.created_at), "MMM d, yyyy h:mm a")}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Inquiry</p>
                <p className="bg-muted p-3 rounded-md">{selectedRequest.inquiry}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-2">Status</p>
                <Select
                  value={selectedRequest.status}
                  onValueChange={(v) => updateStatus(selectedRequest.id, v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Field({ label, value, onCopy }: { label: string; value: string; onCopy: (v: string, l: string) => void }) {
  return (
    <div className="grid grid-cols-[180px_1fr_auto] gap-3 items-center">
      <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
      <code className="text-xs bg-muted px-3 py-2 rounded break-all">{value}</code>
      <Button variant="ghost" size="sm" onClick={() => onCopy(value, label)}>
        <Copy className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
}
