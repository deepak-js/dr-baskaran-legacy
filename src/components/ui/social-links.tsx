import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLinksProps {
  variant?: "default" | "minimal";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const socialMediaLinks = {
  facebook: "https://www.facebook.com/ragadental",
  twitter: "https://twitter.com/ragadental",
  linkedin: "https://www.linkedin.com/company/ragadental",
  instagram: "https://www.instagram.com/ragadental",
  youtube: "https://www.youtube.com/@ragadental",
};

export function SocialLinks({ variant = "default", size = "md", className = "" }: SocialLinksProps) {
  const iconSize = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";
  const buttonSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "default";

  if (variant === "minimal") {
    const linkClassName = className.includes("text-") 
      ? `hover:opacity-80 transition-opacity`
      : "text-muted-foreground hover:text-primary transition-colors";
    
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <a
          href={socialMediaLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={linkClassName}
        >
          <Facebook className={iconSize} />
        </a>
        <a
          href={socialMediaLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className={linkClassName}
        >
          <Twitter className={iconSize} />
        </a>
        <a
          href={socialMediaLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={linkClassName}
        >
          <Linkedin className={iconSize} />
        </a>
        <a
          href={socialMediaLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={linkClassName}
        >
          <Instagram className={iconSize} />
        </a>
        <a
          href={socialMediaLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className={linkClassName}
        >
          <Youtube className={iconSize} />
        </a>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        variant="ghost"
        size={buttonSize}
        asChild
        className="h-9 w-9 p-0"
      >
        <a
          href={socialMediaLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className={iconSize} />
        </a>
      </Button>
      <Button
        variant="ghost"
        size={buttonSize}
        asChild
        className="h-9 w-9 p-0"
      >
        <a
          href={socialMediaLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter className={iconSize} />
        </a>
      </Button>
      <Button
        variant="ghost"
        size={buttonSize}
        asChild
        className="h-9 w-9 p-0"
      >
        <a
          href={socialMediaLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className={iconSize} />
        </a>
      </Button>
      <Button
        variant="ghost"
        size={buttonSize}
        asChild
        className="h-9 w-9 p-0"
      >
        <a
          href={socialMediaLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className={iconSize} />
        </a>
      </Button>
      <Button
        variant="ghost"
        size={buttonSize}
        asChild
        className="h-9 w-9 p-0"
      >
        <a
          href={socialMediaLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <Youtube className={iconSize} />
        </a>
      </Button>
    </div>
  );
}

