"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { MainRoutes } from "@/routes/routes";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { ActiveLink } from "@/ui/components/active-links/active-links";
import { Button } from "@/ui/components/button/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Icons } from "@/ui/components/icons/icons";
import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { WHATSAPP_NUMBER } from "@/lib/contacts";

interface Props {
  className?: string;
  notification?: {
    message: string | React.ReactNode;
    type: "info" | "warning" | "error" | "setting";
  };
  isUserConnected?: boolean;
  role?: string | null;
  name?: string | null;
}

export const Navigation = ({ className, notification }: Props) => {
  const isMobile = useIsMobile();

  console.log(isMobile);
  return (
    <header className={clsx("fixed z-50 w-full", className)}>
      {notification && (
        <Container
          className={clsx(
            "p-2 flex flex-row items-center justify-center w-full text-white gap-2",
            notification.type === "info" && " bg-green-500",
            notification.type === "warning" && " bg-orange-500",
            notification.type === "error" && " bg-red-500",
            notification.type === "setting" && "bg-gray-500",
          )}
        >
          <Container className="relative w-3 h-3">
            <span
              className={clsx(
                "absolute top-0 left-0 right-0 bottom-0 animate-ping rounded-full h-3 w-3",
                notification.type === "info" && " bg-green-300",
                notification.type === "warning" && " bg-orange-300",
                notification.type === "error" && " bg-red-300",
                notification.type === "setting" && "bg-gray-300",
              )}
            ></span>
            <span
              className={clsx(
                "rounded-full w-full h-full flex",
                notification.type === "info" && " bg-green3500",
                notification.type === "warning" && " bg-orange-300",
                notification.type === "error" && " bg-red-300",
                notification.type === "setting" && "bg-gray-300",
              )}
            ></span>
          </Container>
          <Typography variant="small" className="text-white">
            {notification.message}
          </Typography>
        </Container>
      )}
      <Container className="flex flex-row items-center justify-between bg-white px-4 lg:px-16 2xl:px-40 h-16">
        <Container className="flex flex-row items-center justify-between gap-12">
          <Link href="/" className="flex flex-row items-center gap-2">
            Logo
          </Link>
          <Container className="hidden lg:flex flex-row items-center gap-8">
            <nav className="flex flex-row items-center gap-6">
              {MainRoutes.map((route) => (
                <Typography key={route.title}>
                  <ActiveLink href={route.baseUrl!}>{route.title}</ActiveLink>
                </Typography>
              ))}
            </nav>
          </Container>
        </Container>
        <Container className="flex flex-row gap-4 justify-center items-center">
          <Button
            ariaLabel="Contactez-nous"
            className={clsx(isMobile && "rounded-full w-12 h-12 p-4")}
            buttonType="link"
            target="_blank"
            baseUrl={`https://wa.me/${WHATSAPP_NUMBER}`}
          >
            {isMobile ? (
              <Icons size={32} icon={WhatsappIcon} />
            ) : (
              "Contactez-nous"
            )}
          </Button>
        </Container>
      </Container>
    </header>
  );
};
