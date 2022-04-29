import { SvgIconTypeMap } from '@mui/material';
import {
  SettingsOutlined,
  HomeOutlined,
  ExitToAppOutlined,
  NotificationsNoneOutlined,
} from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { DashBoardIcon, TicketIcon } from './SVGIcons';

export type IconNames =
  | 'gear'
  | 'house'
  | 'exit'
  | 'notification'
  | 'people'
  | 'truck'
  | 'person'
  | 'ticket'
  | 'dashboard';

/**
 * @param root0 - Props.
 * @param root0.name - Name of the icon.
 * @returns {JSX.Element} - Icon component.
 */
export function Icon({
  name,
  ...rest
}: {
  name: IconNames;
} & SvgIconTypeMap['props']): JSX.Element {
  let icon;
  switch (name) {
    case 'gear':
      icon = <SettingsOutlined {...rest} />;
      break;
    case 'house':
      icon = <HomeOutlined {...rest} />;
      break;
    case 'exit':
      icon = <ExitToAppOutlined {...rest} />;
      break;
    case 'dashboard':
      icon = <DashBoardIcon {...rest} />;
      break;
    case 'notification':
      icon = <NotificationsNoneOutlined {...rest} />;
      break;
    case 'people':
      icon = <GroupsIcon {...rest} />;
      break;

    case 'ticket':
      icon = <TicketIcon {...rest} />;
      break;
    case 'truck':
      icon = <LocalShippingIcon {...rest} />;
      break;
    case 'person':
      icon = <PersonAddAlt1Icon {...rest} />;
      break;
    default:
      break;
  }
  if (!icon) {
    throw new Error('Not icon found');
  }
  return icon;
}
