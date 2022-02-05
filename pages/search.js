import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'

import SearchFilters from '../components/SearchFilters'
import Property from '../components/Property'
import noResult from '../assets/noresult.png'

const Search = () => {

    const [searchFilter, setSearchFilter] = useState(false)
    const router = useRouter()

    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="green.200"
                p="2"
                fontSize="large"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFilter((prevFilters) => !prevFilters)}
            >
                <Text>Search Property By Filters</Text>
                <Icon paddingLeft="2" w="7" as={ BsFilter} />
            </Flex>

            {
                searchFilter && <SearchFilters />
            }

            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties { router.query.purpose }
            </Text>

            <Flex flexWrap="wrap">
                { [].map((property) => <Property property={property} key={property.id} /> )}
            </Flex>

            { [].length === 0 && (
                <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                    <Image alt='No Result' src={noResult} />
                </Flex>
            )}
        </Box>
    )
}

export default Search;
