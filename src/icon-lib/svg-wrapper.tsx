import styled from 'styled-components';

interface SvgWrapperProps {
  height?: string;
  width?: string;
  fill?: string;
  alertFill?: string;
  badgeFill?: string;
  hoverFill?: string;
  transform?: string;
}

const SvgWrapper = styled.div<SvgWrapperProps>`
  display: inline-block;
  height: ${props => props.height};
  width: ${props => props.width};
  fill: ${props => props.fill};
  transform: ${props => props.transform ? props.transform : undefined };

  & > svg {
    width: 100%;
    height: 100%;
    fill: inherit;
    pointer-events: none;
  }

  & .clr-i-alert {
    fill: ${props => props.alertFill};
  }

  & .clr-i-badge {
    fill: ${props => props.badgeFill};
  }

  &:hover > svg {
    fill: ${props => (props.hoverFill ? props.hoverFill : undefined)};
  }
`;

export default SvgWrapper;
