// tslint:disable:jsx-no-lambda

import { Pivot, PivotItem } from 'office-ui-fabric-react'
import * as React from 'react'
import { InjectedRouterNode, withRoute } from 'react-router5'
import logo from '../assets/speedcrawl.png'
import { ContentContainer } from '../components'
import styled, { cssify, Flex } from '../styled'

const Container = styled.div`
  background: ${({ theme }) => theme.palette.neutralLight};
  > * { overflow: hidden; }
  /* color: ${({ theme }) => theme.palette.white}; */
`
const TitleContainer = styled(Flex)`
  white-space: pre;
  overflow: hidden;
`

const Title = styled.h1`
  ${({ theme }) => cssify(theme.fonts.xLarge)}
  overflow: hidden;

  span {
    display: none;
  }

  img {
    vertical-align: text-bottom;
    margin-right: 5px;
  }

  @media screen and (min-width: 480px) {
    span {
      display: inline;
    }
  }
`

export type HeaderProps = Partial<InjectedRouterNode> & {}
export const Header = withRoute(({ router, route }: HeaderProps) => (
  <Container>
    <ContentContainer px={2} justifyContent="space-between" flexWrap="wrap">
      <TitleContainer pt={2} mr={2}>
        <Title>
          <img src={logo} alt="Speedcrawl" height="24" />
          <span>Speedcrawl</span>
        </Title>
      </TitleContainer>

      <Flex alignItems="center" pt={1} flex="4" justifyContent="flex-end">
        <Pivot
          headersOnly={true}
          selectedKey={route ? route.name.replace(/rankings\./, '') : null}
          onLinkClick={item => {
            router.navigate(`rankings.${item.props.itemKey}`)
          }}>
          <PivotItem itemKey="player" headerText="by Player" />
          <PivotItem itemKey="race" headerText="by Race" />
          <PivotItem itemKey="background" headerText="by Class" />
          <PivotItem itemKey="god" headerText="by God" />
        </Pivot>
      </Flex>
    </ContentContainer>
  </Container>
))
