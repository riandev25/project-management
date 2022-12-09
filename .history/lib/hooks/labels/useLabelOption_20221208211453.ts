import { useContext, useState, useEffect, ChangeEvent } from 'react';
import { filteredColors } from '../../../components/CardFeaturesModal/Labels/filteredLabelColors';
import { LabelColors } from '../../../components/CardFeaturesModal/Labels/LabelColors';
import { ILabelColors, ILabelOption } from '../../../interfaces/data';
import { FeatureContext } from '../../context/FeatureContext/featureProvider';
import { LabelContext } from '../../context/LabelContext/LabelContext';

const useLabelOption = ({
  bgColor,
  iconColor,
  bgColorStrip,
  bgColorHover,
  name,
  onUpdateData,
  onCreateData,
  onDeleteLabel,
  openLabelOption,
}: ILabelOption) => {
  const color = {
    bgColor: bgColor,
    iconColor: iconColor,
    bgColorStrip: bgColorStrip,
    bgColorHover,
  };

  // Contexts
  const { dispatchLabel } = useContext(LabelContext);
  const { dispatchFeature } = useContext(FeatureContext);

  // Local state
  const [colorBg, setColorBg] = useState<string | undefined>(color.bgColor);
  const [colorIcon, setColorIcon] = useState<string | undefined>(
    color.iconColor
  );
  const [colorBgStrip, setColorBgStrip] = useState<string | undefined>(
    color.bgColorStrip
  );
  const [colorBgHover, setColorBgHover] = useState<string | undefined>(
    color.bgColorHover
  );
  const [createTitle, setCreateTitle] = useState(name);
  const [colorChoices, setColorChoices] = useState<ILabelColors[]>([]);

  const data = {
    bgColor: colorBg,
    iconColor: colorIcon,
    bgColorStrip: colorBgStrip,
    bgColorHover: colorBgHover,
  };

  // Handlers
  const backBtnHandler = (id: string) => {
    if (id === 'create-back-btn') {
      openLabelOption();
    } else {
      dispatchLabel({
        type: 'LABEL_OPTION_TOGGLE',
        payload: id,
      });
    }
  };

  const exitBtnHandler = (id: string, effect: string) => {
    dispatchLabel({
      type: 'LABEL_OPTION_TOGGLE',
      payload: id,
    });

    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: effect },
    });
  };

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCreateTitle(event.target.value);
    console.log(event.target.value);
  };

  const labelColorHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const idColor = event.currentTarget.dataset.id;
    setColorChoices((prevColors) => {
      const updated = prevColors.map((item) => {
        return item.id === idColor
          ? { ...item, isActive: true }
          : { ...item, isActive: false };
      });
      return updated;
    });
  };

  const updateLabel = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    onUpdateData({ ...data, id: id, name: createTitle });
    dispatchLabel({
      type: 'LABEL_OPTION_TOGGLE',
      payload: id,
    });
  };

  const createLabel = () => {
    onCreateData({ ...data, name: createTitle });
  };

  const deleteLabel = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    onDeleteLabel(id);
  };

  useEffect(() => {
    const filteredLabelColors = filteredColors({ LabelColors, colorBg });
    const timeout = setTimeout(() => {
      setColorChoices(filteredLabelColors);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [colorBg]);

  useEffect(() => {
    const currentBgColor = colorChoices.find((item) => item.isActive);
    if (currentBgColor) {
      const { bgColor, iconColor, bgColorStrip, bgHoverColor } = currentBgColor;
      setColorBg(bgColor);
      setColorIcon(iconColor);
      setColorBgStrip(bgColorStrip);
      setColorBgHover(bgHoverColor);
    }
  }, [colorChoices]);

  return {
    backBtnHandler,
    exitBtnHandler,
    changeTitleHandler,
    labelColorHandler,
    updateLabel,
    createLabel,
    deleteLabel,
  };
};
export default useLabelOption;
