import styled from 'styled-components'

export const ShowcaseItemWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  width: 25%;
  overflow: hidden;
`

export const CommentWrapper = styled.span`
  position: absolute;
  background-color: ${(props) => props.theme.color.hoverBgColor};
  font-size: ${(props) => props.theme.fontSize.smaller};
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`

export const ImageWrapper = styled.img`
  object-fit: cover; // 图片放大 保证固定高度
  height: 200px;
  border-radius: 5px 5px 0 0;
`

export const TagWrapper = styled.span<{ tagColor: string }>`
  color: ${(props) => props.tagColor};
  font-size: ${(props) => props.theme.fontSize.smaller};
`

export const TitleWrapper = styled.div`
  font-size: ${(props) => props.theme.fontSize.primary};
  font-weight: bold;
  margin: 5px 0;
`

export const RateWrapper = styled.div`
  & > span:nth-child(2),
  & > span:nth-child(3) {
    margin-left: 5px;
    color: ${(props) => props.theme.textColor.secondaryColor};
  }

  span {
    font-size: 12px;
    margin-right: -1px;
  }
`
