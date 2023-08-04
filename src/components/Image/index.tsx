import styled from 'styled-components';

export default function Image({ src, alt, width, height, className = 'null' }) {

  const Image = styled.img<{ $width?: number; }>`
    max-width: 100%;
    height: auto;
    display: block;
    vertical-align: middle;
    aspect-ratio: auto ${props => props.$width} / 100;
    overflow-clip-margin: content-box;
    overflow: clip;
  `;

  return (
    <>
      <Image src={src} alt={alt} width={width} $width={width} height={height} className={className}></Image>
    </>
  )
}