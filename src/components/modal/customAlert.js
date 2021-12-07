import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function CustomAlert() {
    const handleOption = (title, message) => {
      return {
          title: title,
          message: message,
          buttons: [
          {
            label: 'Yes',
            onClick: () => alert('Click Yes')
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ]
      }
    }

    return (
        <>
        {
            confirmAlert(handleOption()) 
        }
        </>
    )
}

export default CustomAlert;