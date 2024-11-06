import { createSystem } from 'frog/ui'
 
export const {
  Box,
  Columns,
  Column,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Rows,
  Row,
  Spacer,
  Text,
  VStack,
  vars,
} = createSystem({  colors: {
    text: '#ffffff ',
    background: '#651bf2',
    
  },
  fonts: {
    default: [
      {
        name: 'Comic Neue',
        source: 'google',
        weight: 700,
      },
      {
        name: 'Open Sans',
        source: 'google',
        weight: 600,
      },
    ],
    madimi: [
      {
        name: 'Madimi One',
        source: 'google',
      },
    ],
  },
})