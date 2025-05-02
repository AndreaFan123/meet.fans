"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  PencilIcon,
  CheckIcon,
  XIcon,
  CrownIcon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Membership } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface ProfileHeaderProps {
  initialData: User;
}

export function ProfileHeader({ initialData }: ProfileHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(initialData);
  const [membership, setMembership] = useState<Membership>(
    initialData.membership
  );
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setUserData({ ...userData, [field]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    // Here you would typically save changes to the backend
    // Update the membership in userData too
    setUserData({ ...userData, membership });
    setIsEditing(false);
  };

  const cancelEdit = () => {
    // Reset membership to original value
    setMembership(initialData.membership);
    setUserData(initialData);
    setIsEditing(false);
  };

  const getMembershipDisplay = (type: Membership) => {
    switch (type) {
      case "monthly":
        return "Monthly";
      case "annual":
        return "Annual";
      case "free":
      default:
        return "Free";
    }
  };

  const getMembershipPrice = (type: Membership) => {
    switch (type) {
      case "monthly":
        return "$9.99/month";
      case "annual":
        return "$99.99/year";
      case "free":
      default:
        return "Free";
    }
  };

  const getMembershipBadgeColor = (
    type: Membership
  ): "outline" | "secondary" | "default" => {
    switch (type) {
      case "monthly":
        return "secondary";
      case "annual":
        return "default";
      case "free":
      default:
        return "outline";
    }
  };

  const cancelMembership = () => {
    if (
      confirm(
        "Are you sure you want to cancel your paid membership? You will be downgraded to the free plan."
      )
    ) {
      setMembership("free");
      setUserData({ ...userData, membership: "free" });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="mb-8 border-none shadow-none bg-transparent">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
          <Avatar className="h-24 w-24 border">
            <AvatarImage src={userData.image} alt={userData.name} />
            <AvatarFallback className="text-2xl">
              {userData.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-muted-foreground">{userData.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge
                variant={getMembershipBadgeColor(userData.membership)}
                className="px-2 py-1"
              >
                <CrownIcon className="h-3 w-3 mr-1" />
                {getMembershipDisplay(userData.membership)}
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            {!isEditing ? (
              <Button onClick={toggleEdit} variant="outline" size="sm">
                <PencilIcon className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <>
                <Button onClick={saveChanges} variant="default" size="sm">
                  <CheckIcon className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button onClick={cancelEdit} variant="outline" size="sm">
                  <XIcon className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              {isEditing ? (
                <Input
                  id="username"
                  value={userData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              ) : (
                <div className="p-2 bg-secondary rounded-md">
                  {userData.name}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={userData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              ) : (
                <div className="p-2 bg-secondary rounded-md">
                  {userData.email}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="membership">Membership</Label>
              {isEditing ? (
                <div className="space-y-2">
                  <Select
                    value={membership}
                    onValueChange={(value) =>
                      setMembership(value as Membership)
                    }
                  >
                    <SelectTrigger id="membership">
                      <SelectValue placeholder="Select a membership plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">
                        <div className="flex items-center gap-2">
                          <span>Free Plan</span>
                          <Badge variant="outline" className="ml-2">
                            Free
                          </Badge>
                        </div>
                      </SelectItem>
                      <SelectItem value="monthly">
                        <div className="flex items-center gap-2">
                          <span>Monthly Subscription</span>
                          <Badge variant="secondary" className="ml-2">
                            $9.99/month
                          </Badge>
                          <Badge variant="default">Popular</Badge>
                        </div>
                      </SelectItem>
                      <SelectItem value="yearly">
                        <div className="flex items-center gap-2">
                          <span>Annual Subscription</span>
                          <Badge variant="outline" className="ml-2">
                            $99.99/year
                          </Badge>
                          <Badge variant="secondary">Best Value</Badge>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="p-2 bg-secondary rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{getMembershipDisplay(userData.membership)}</span>
                      <Badge
                        variant={getMembershipBadgeColor(userData.membership)}
                        className="ml-2"
                      >
                        {getMembershipPrice(userData.membership)}
                      </Badge>
                    </div>
                    {/* TODO: Add tooltip */}
                    {userData.membership !== "free" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive flex items-center justify-center hover:text-destructive hover:bg-destructive/10"
                        onClick={cancelMembership}
                      >
                        <XIcon
                          className="border border-red-600 bg-red-600 text-white rounded-full"
                          aria-label="取消會員"
                        />
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              {isEditing ? (
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={togglePasswordVisibility}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              ) : (
                <div className="p-2 bg-secondary rounded-md">••••••••</div>
              )}
            </div>

            {/* FIXME: Amend UI, make a multi-select */}
            <div className="space-y-2">
              <Label htmlFor="topic">Choose Topic</Label>
              {isEditing ? (
                <Select
                  value={"itzy"}
                  onValueChange={(value) => handleChange("topic", value)}
                >
                  <SelectTrigger id="topic">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    {userData?.favoriteGroups?.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <div className="p-2 bg-secondary rounded-md">
                  {userData.favoriteGroups?.join(", ") || "No topics selected"}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
