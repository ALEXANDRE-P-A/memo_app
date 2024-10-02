import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import fontDate from "../../assets/fonts/icomoon.ttf";
import fontSelection from "../../assets/fonts/selection.json";

const CustomIcon = createIconSetFromIcoMoon(
  fontSelection,
  "IcoMoon",
  "icomoon.ttf"
);

interface Props {
  name: string
  size: number
  color: string
}

const Icon = (props: Props):JSX.Element | null => {

  const { name, size, color } = props;

  const [ fontloaded ] = useFonts({
    IcoMoon: fontDate
  });

  if(!fontloaded){
    return null
  }

  return (
    <CustomIcon name={ name } size={ size } color={ color } />
  )
};

export default Icon;