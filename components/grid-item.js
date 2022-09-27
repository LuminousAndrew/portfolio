import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const CSSGridItem = ({ children, id, title, thumbnail, href }) => {
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`/${href}/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
          />
          <LinkOverlay href={`/${href}/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export const ProjectsGridItem = ({ children, title, thumbnail, href }) => {
  return (
    <Box w="100%" textAlign="center">
      <a target="_blank" rel="noopener noreferrer" href={`${href}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={thumbnail}
            loading="lazy"
          />
          <a target="_blank" rel="noopener noreferrer" href={`${href}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </a>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </a>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
