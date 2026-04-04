import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Eye, RefreshCw, LogOut, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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

export default function Admin() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [requests, setRequests] = useState<ConsultationRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<ConsultationRequest | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchRequests();
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
