import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import type { NextPage } from "next";

import { ArtistProps } from "@/types";

const ArtistInfo: NextPage<{ artist: ArtistProps }> = ({ artist }) => {
  return (
    <Box>
      <Flex flexWrap="wrap" sx={{ justifyContent: "center", p: 5, gap: 5 }}>
        <Box width={{ xs: "100%", sm: "clamp(30%, 250px, 50%)" }}>
          <Image
            src={artist.images[0].url}
            alt={artist.name}
            borderRadius="50%"
            filter="drop-shadow(2px 4px 6px black)"
          />
        </Box>
        <Box>
          <Heading as="h2">{artist.name}</Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default ArtistInfo;
