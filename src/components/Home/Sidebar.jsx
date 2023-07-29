import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Stack, Checkbox, } from '@chakra-ui/react'

const Sidebar = ({ categoryFilter, onPriceFilterChange }) => {
    const [priceFilter, setPriceFilter] = React.useState([]); 
    // filter data
    const handlePriceFilterChange = (event) => {
        const value = parseInt(event.target.value);
        let newPriceFilter = [...priceFilter];
        if (event.target.checked) {
            newPriceFilter.push(value);
        } else {
            newPriceFilter = newPriceFilter.filter((price) => price !== value);
        }
        setPriceFilter(newPriceFilter);
        onPriceFilterChange(newPriceFilter);
    };

    return (
        <div>
            <Box width="250px" >
                <Accordion fontSize="10px" fontWeight={400} lineHeight='24px' padding={"20px"} allowMultiple>
                    <AccordionItem marginTop="10px" >
                        <h2>
                            <AccordionButton border={"1px solid rgba(0,0,0,0.1)"} fontSize="18px" fontWeight={500} lineHeight='24px' backgroundColor='white' color=' rgb(26, 32, 44)'>
                                <Box as="span" flex='1' textAlign='left' >
                                    <Text fontSize={"17px"}>Filters</Text>
                                </Box>
                            </AccordionButton>
                        </h2>
                    </AccordionItem>
                    <AccordionItem marginTop="20px">
                        <h2>
                            <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                                <Box as="span" flex='1' textAlign='left'>
                                    Price
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <Stack spacing={5} direction='column'>
                                <Checkbox value={199}
                                    onChange={handlePriceFilterChange} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green'  >
                                    Under ₹ 199
                                </Checkbox>
                                <Checkbox value={299}
                                    onChange={handlePriceFilterChange} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgba(0,0,0,0.3)"} colorScheme='green' >
                                    Under ₹ 399
                                </Checkbox>
                                <Checkbox value={599}
                                    onChange={handlePriceFilterChange} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgba(0,0,0,0.3)"} colorScheme='green' >
                                    Under ₹ 599
                                </Checkbox>
                                <Checkbox value={799}
                                    onChange={handlePriceFilterChange} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgba(0,0,0,0.3)"} colorScheme='green' >
                                    Under ₹ 799
                                </Checkbox>
                                <Checkbox value={999}
                                    onChange={handlePriceFilterChange} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgba(0,0,0,0.3)"} colorScheme='green' >
                                    Under ₹ 999
                                </Checkbox>

                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* category */}
                    <AccordionItem marginTop="20px" >
                        <h2>
                            <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
                                <Box as="span" flex='1' textAlign='left'>
                                    Category
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <Stack spacing={5} direction='column'>
                                <Checkbox value={"mens-watches"}
                                    onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    mens-watches
                                </Checkbox>
                                <Checkbox value={"sunglasses"}
                                    onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    sunglasses
                                </Checkbox>
                                <Checkbox value={"womens-shoes"}
                                    onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    womens-shoes
                                </Checkbox>

                                <Checkbox value={"mens-shoes"}
                                    onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    mens-shoes
                                </Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>



                    {/* Rating */}
                    <AccordionItem marginTop="20px">
                        <h2>
                            <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)'>
                                <Box as="span" flex='1' textAlign='left'>
                                    Rating
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Stack spacing={5} direction='column'>
                                <Checkbox colorScheme='green' >
                                    2.0 and above
                                </Checkbox>
                                <Checkbox colorScheme='green' >
                                    3.0 and above
                                </Checkbox>
                                <Checkbox colorScheme='green' >
                                    4.0 and above
                                </Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </Box>
        </div>
    );
}

export default Sidebar;
