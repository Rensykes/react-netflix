import React from 'react'
import { Background, Container, Logo, ButtonLink, Feature, Text, FeatureCallout } from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header({ children, bg = true, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : (children)
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Header.FeatureCallout = function HeaderFeatureCallout({ children, ...restProps }) {
    return <FeatureCallout {...restProps}>{children}</FeatureCallout>;
}