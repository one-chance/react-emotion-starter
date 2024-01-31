import { Flex, NavLink, Text } from '@components/shared';

export default function NotFound() {
  return (
    <Flex
      alignItems="center"
      background="background"
      direction="column"
      gap={40}
      height="full"
      justifyContent="center"
      zIndex={100}
      fixed
    >
      <Text size="xxLarge" weight="bold">
        Page Not Found
      </Text>

      <NavLink
        background="green"
        color="white"
        css={{ padding: '0 30px', borderRadius: '8px', lineHeight: '46px' }}
        size="large"
        to="/"
        weight="bold"
      >
        Home
      </NavLink>
    </Flex>
  );
}
