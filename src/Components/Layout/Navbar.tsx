import { HStack, Image,Text } from '@chakra-ui/react'
import logo from '../../assets/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch';
// import ColorModeSwitch from './ColorModeSwitch';
// import SearchInput from './SearchInput';

// interface Props {
//   onSearch: (searchText: string) => void;
// }
// {onSearch} : Props

function Navbar() {
  return (
    <HStack padding='10px' justifyContent={"space-between"}>
    <Image src={logo} boxSize='60px' />
    <ColorModeSwitch />
    {/* <SearchInput onSearch={onSearch} />
    <ColorModeSwitch /> */}
  </HStack>
  )
}

export default Navbar