import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, MapPin, Camera, Package, Heart, LogOut } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    address: "123 Fashion Street, Mumbai, Maharashtra 400001",
  });

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-hero py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-gradient-primary rounded-2xl p-8 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop')] bg-cover bg-center opacity-10" />
              <div className="relative flex flex-col md:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-primary-foreground/30">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                {/* Info */}
                <div className="text-center md:text-left text-primary-foreground">
                  <h1 className="text-2xl md:text-3xl font-bold mb-1">{profile.name}</h1>
                  <p className="text-primary-foreground/80">{profile.email}</p>
                  <p className="text-sm text-primary-foreground/60 mt-2">
                    Member since January 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-card rounded-xl p-4 text-center shadow-soft hover:shadow-medium transition-shadow cursor-pointer"
                   onClick={() => navigate("/orders")}>
                <Package className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Orders</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center shadow-soft hover:shadow-medium transition-shadow cursor-pointer"
                   onClick={() => navigate("/wishlist")}>
                <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-sm text-muted-foreground">Wishlist</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gradient-primary mx-auto mb-2 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">₹</span>
                </div>
                <p className="text-2xl font-bold text-foreground">2,450</p>
                <p className="text-sm text-muted-foreground">Rewards</p>
              </div>
            </div>

            {/* Profile Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Personal Information</h2>
                {!isEditing && (
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(true)}
                    className="rounded-full"
                  >
                    Edit Profile
                  </Button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      disabled={!isEditing}
                      className="pl-12 h-12 rounded-xl bg-secondary border-0 disabled:opacity-100 disabled:cursor-default"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      disabled={!isEditing}
                      className="pl-12 h-12 rounded-xl bg-secondary border-0 disabled:opacity-100 disabled:cursor-default"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      disabled={!isEditing}
                      className="pl-12 h-12 rounded-xl bg-secondary border-0 disabled:opacity-100 disabled:cursor-default"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address" className="text-foreground font-medium">
                    Address
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                    <textarea
                      id="address"
                      value={profile.address}
                      onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                      disabled={!isEditing}
                      rows={3}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border-0 disabled:opacity-100 disabled:cursor-default resize-none focus:ring-2 focus:ring-primary/30 outline-none"
                    />
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                  <Button
                    onClick={handleSave}
                    className="flex-1 h-12 rounded-xl bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold"
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                    className="flex-1 h-12 rounded-xl"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full mt-6 flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors font-medium"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
