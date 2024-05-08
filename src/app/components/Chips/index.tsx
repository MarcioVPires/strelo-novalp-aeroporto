import { Chip } from './style';
import Image from 'next/image';

type CustomChip = {
  label: string;
  icon: any;
};

function CustomChip({ label, icon }: CustomChip) {
  return <Chip label={label} icon={<Image src={icon} alt="" />} />;
}

export default CustomChip;
