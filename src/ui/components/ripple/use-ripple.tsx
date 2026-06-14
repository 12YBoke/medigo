import { Container } from "@/ui/components/container/container";
import Ripple from "./ripple";

interface Props {
  children: React.ReactNode;
}

export const UseRipple = ({ children }: Props) => {
  return (
    <Container className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <Container className="z-10">{children}</Container>
      <Ripple />
    </Container>
  );
};
