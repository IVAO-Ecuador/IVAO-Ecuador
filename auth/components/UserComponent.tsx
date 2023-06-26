"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { IUser } from "../types/user";
import { useSession } from "next-auth/react";
import { Avatar, Group, Skeleton, Text } from "@mantine/core";
import { BsGlobeAmericas } from "react-icons/bs";

const getUser = async () => {
  const res = await fetch("/api/user");
  const user = (await res.json()) as IUser;
  return user;
};

const UserComponent = () => {
  const { status } = useSession();

  const { data, isLoading, isFetched, isFetching} = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    enabled: status === "authenticated",
  });

  if (isLoading || isFetching || !isFetched || !data)
    return (
      <>
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </>
    );
  

  return (
    <div>
      <Group noWrap>
        {/* <Image src={IVAOLogo} alt='ivao blue'/> */}
        <Avatar size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="gray">
            {data?.rating.pilotRating.name} (
            {data?.rating.pilotRating.shortName}) -{" "}
            {data?.rating.atcRating.name} ({data?.rating.atcRating.shortName})
          </Text>
          <Text fz="lg" fw={500}>
            {data?.firstName} {data?.lastName} - ({data?.id})
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <BsGlobeAmericas stroke="1.5" size="1rem" />
            {/* <IconAt stroke={1.5} size="1rem"  /> */}
            <Text fz="xs" c="dimmed">
              {data?.divisionId}
            </Text>
          </Group>

          {/* <Group noWrap spacing={10} mt={5}>
            
            <Text fz="xs" c="dimmed">
              {phone}
            </Text>
          </Group> */}
        </div>
      </Group>
    </div>
  );
};

export default UserComponent;
