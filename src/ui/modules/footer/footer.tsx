import { Separator } from "@/shadcnui/ui/separator";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/Logo/logo_primary.webp";
import { MainRoutes } from "@/routes/routes";
import { Icons } from "@/ui/components/icons/icons";
import { Mail, Phone } from "@hugeicons/core-free-icons";
import { WHATSAPP_NUMBER } from "@/lib/contacts";
import { FormatPhoneNumber } from "@/lib/format-phone-number";

interface Props {
  hideLinks?: boolean;
}

export const Footer = ({ hideLinks = false }: Props) => {
  return (
    <Container className="bg-black px-4 lg:px-24 py-16 flex flex-col gap-12">
      {!hideLinks && (
        <>
          <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Container className="flex flex-col gap-4 col-span-2">
              <Typography variant="heading" className="text-white">
                Logo
              </Typography>
            </Container>

            {/* Colonne 2 — Navigation */}
            <Container className="flex flex-col gap-4">
              <Typography variant="heading" className="text-white">
                Lien rapide
              </Typography>
              <Container className="flex flex-col gap-2">
                {MainRoutes.map(({ title, baseUrl }) => (
                  <Link
                    key={baseUrl}
                    href={baseUrl!}
                    className="text-neutral-400 hover:text-white text-body-sm transition-colors"
                  >
                    {title}
                  </Link>
                ))}
              </Container>
            </Container>

            {/* Colonne 4 — Contact */}
            <Container className="flex flex-col gap-4">
              <Typography variant="heading" className="text-white">
                Contact
              </Typography>
              <Container className="flex flex-col gap-3">
                <Container className="flex items-center gap-2">
                  <Icons icon={Phone} size={16} className="text-primary-300" />
                  <Container className="flex flex-col gap-0.5">
                    <Typography variant="small" className="text-neutral-400">
                      {FormatPhoneNumber(WHATSAPP_NUMBER).internationalNumber}
                    </Typography>
                  </Container>
                </Container>
                <Container className="flex items-center gap-2">
                  <Icons icon={Mail} size={16} className="text-primary-300" />
                  <Typography variant="small" className="text-neutral-400">
                    contact@medigo.cd
                  </Typography>
                </Container>
              </Container>
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                className="inline-flex items-center gap-2 text-small lg:text-small-lg text-primary-300 hover:text-primary-200 transition-colors"
              >
                Nous écrire sur WhatsApp →
              </Link>
            </Container>
          </Container>

          <Separator className="bg-primary-100" />
        </>
      )}

      {/* Bas de footer */}
      <Container className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <Typography variant="small" className="text-neutral-300">
          © {new Date().getFullYear()} . Tous droits réservés.
        </Typography>
        <Typography variant="small" className="text-neutral-300">
          Site conçu et développé par{" "}
          <Link
            href=""
            className="text-primary-400 hover:text-primary-300 underline underline-offset-2 transition-colors"
          >
            kreativ room
          </Link>
        </Typography>
      </Container>
    </Container>
  );
};
