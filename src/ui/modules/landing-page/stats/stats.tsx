"use client";
import { useScreenSize } from "@/hooks/use-screen-size";
import { StatsContent } from "@/lib/stats-content";
import { Container } from "@/ui/components/container/container";
import { CountUpAnimation } from "@/ui/components/count-up-animation/count-up-animation";
import { Typography } from "@/ui/components/typography/typography";
import { useMemo } from "react";

export const Stats = () => {
  const screenSize = useScreenSize();

  const delays = useMemo(() => {
    const indices = StatsContent.map((_, i) => i);

    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    return indices.map((order) => order * 0.3);
  }, []);

  return (
    <Container>
      <Container className="py-40 px-5 lg:px-10 flex flex-col items-center gap-20">
        <Container className="flex flex-col gap-5">
          <Typography
            variant="title"
            className="text-center md:w-[52vw] lg:w-[40vw]"
          >
            Objectif 2026
          </Typography>
          <Typography className="text-center md:w-[52vw] lg:w-[40vw]">
            La tech locale mérite d’être visible, soutenue et reconnue.
            Tech-korner agit comme un accélérateur communautaire, un lieu où les
            idées, les personnes et les opportunités se rencontrent.
          </Typography>
        </Container>
        <Container className="grid grid-cols-2 md:flex md:flex-row gap-1">
          {StatsContent.map((stat, index) => (
            <Container
              animation="MoveOnVisible"
              delay={delays[index]}
              key={stat.id}
              yValue={100}
              className="group bg-secondary-950 hover:bg-secondary-900 animate p-2 rounded-lg md:flex-1/4 flex flex-col items-center gap-4 justify-between"
            >
              <Container className="flex flex-col items-center gap-2 w-full rounded p-4 lg:p-8">
                <CountUpAnimation
                  to={stat.count}
                  suffix={stat.suffix}
                  className="text-title-md lg:text-title-lg text-white"
                  delay={delays[index] + 0.5}
                />
                <Typography
                  variant="small"
                  className="text-center h-10 text-white"
                >
                  {stat.title}
                </Typography>
              </Container>
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
};
