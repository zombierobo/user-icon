import styled from 'styled-components';

interface SvgWrapperProps {
  height?: string;
  width?: string;
  fill?: string;
  alertFill?: string;
  badgeFill?: string;
  hoverFill?: string;
}

const SvgWrapper = styled.div<SvgWrapperProps>`
  display: inline-block;
  height: ${props => props.height};
  width: ${props => props.width};
  fill: ${props => props.fill};

  & > svg {
    width: 100%;
    height: 100%;
    fill: inherit;
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
