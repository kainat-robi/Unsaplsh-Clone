import { Grid, GridItem,Box,Flex , Image,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./style.css"; 
import Navbar_Blog from './navbarofblog'

const Blog = () => {
  return (
    <>
      <Navbar_Blog />

      <div className="blog-header ">
        <h1 className="blog-title">Unsplash Blog</h1>
        <p className="blog-description">
          Stories from the community powering the internet’s visuals
        </p>
      </div>

      <div className="featured-section">
        <h2 className="section-title">Featured</h2>
        <div className="featured-grid">
        <Grid cursor="pointer" templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="500px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/2024/02/Unsplash--Announcement--Blog-.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Community
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Meet Susan Wilkinson
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Alex begin </Text>
                      <Text ml="1rem">July 14, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="500px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/2024/02/unnamed--1-.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Unsplash X DeepMind
                    </Text>
                    <Flex color="gray.700" mt="2rem">
                      <Text>Natalie Brennan </Text>
                      <Text ml="1rem">June 20, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>

          <GridItem w="100%" h="400">
            <Box
              w="100%"
              h="500px"
              border="1px solid lightgray"
              borderRadius="4px"
              _hover={{
                boxShadow: "xl",
              }}
            >
              <Flex flexDirection="column">
                <Image
                  src="https://unsplash.com/blog/content/images/2023/12/Frame-3.jpg"
                  w="100%"
                  h="240px"
                ></Image>
                <Box p={4} textAlign="start">
                  <Flex flexDirection="column">
                    <Text fontWeight="600" color="black">
                      Announcements
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Meet the Unsplash Team:
                    </Text>
                    <Text fontWeight="700" fontSize="2xl">
                      Tim Carbone
                    </Text>
                    <Flex color="gray.700" mt="-0.2rem">
                      <Text>Natalie Brennan </Text>
                      <Text ml="1rem">June 15, 2022</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>
          </Grid>
       </div>
       </div>

      <div className="load-more-posts">
        <Link to="/" className="load-more-link">
          Load More Posts
        </Link>
      </div>

  
    </>
  );
};

export default Blog;
