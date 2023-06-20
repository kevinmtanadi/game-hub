import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card borderRadius={10}>
      <HStack height="32px">
        <Skeleton boxSize="32px" borderRadius={8} />
        <SkeletonText />
      </HStack>
    </Card>
  );
};

export default GenreSkeleton;
