import { HStack, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <HStack w={'full'} justify={'space-between'} bgColor={'blackAlpha.900'} >
      <Text p={'4'} color={'white'}  fontSize={'25'} fontFamily={'Bebas Neue'} >DailyCrypto</Text>
      <HStack p={'4'} shadow={'base'} gap={'2'}>
        <Button variant={'unstyled'} color={'white'} >
            <Link to="/">Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} >
            <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} >
            <Link to="/coins">Coins</Link>
        </Button>
    </HStack>
    </HStack>
  )
}

export default Header
