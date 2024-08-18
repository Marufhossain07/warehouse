import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PreviewIcon from '@mui/icons-material/Preview';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import ProductDetails from './multi-stage form/ProductDetails';
import InventoryDetail from './multi-stage form/InventoryDetail';
import Photo from './multi-stage form/Photo';
import Review from './multi-stage form/Review';
import useProd from '../hooks/useProd';


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#1776D2 0%,#1776D2 50%,#1776D2 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#1776D2 0%,#1776D2 50%,#1776D2 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 95deg,#1776D2 0%,#1776D2 50%,#1776D2 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 95deg,#1776D2 0%,#1776D2 50%,#1776D2 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <ProductionQuantityLimitsIcon />,
    2: <InventoryIcon />,
    3: <AddPhotoAlternateIcon />,
    4: <PreviewIcon />,
    
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ['Product Details', 'Inventory Details', 'Add Photo', 'Review'];

export default function CustomizedSteppers() {
  const {step} = useProd()
  return (
      <div>
      <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
        {
          step === 0 && <ProductDetails></ProductDetails>
        }
        {
          step === 1 && <InventoryDetail></InventoryDetail>
        }
        {
          step === 2 && <Photo></Photo>
        }
        {
          step === 3 && <Review></Review>
        }
        </div>
  );
}