import React, {useState} from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { googleCalendarUrl, outlookCalendarUrl, yahooCalendarUrl, ICSCalendarUrl } from '../shared/urls'

const Calendars = ({ event }) => {
    const[isOpen, setIsOpen] = useState(false)
    const handleClick = (eventId) => () => {
    setIsOpen(!isOpen)

  }
    return(
        <ButtonDropdown  isOpen={isOpen} toggle={handleClick(event.id)} >
            <DropdownToggle outline color='warning'>
                <span >Add to Calender</span>
            </DropdownToggle>
            <DropdownMenu style={{ zIndex: 2222 }}>
                <DropdownItem target="_blank" href={googleCalendarUrl(event)} >Google</DropdownItem>
                <DropdownItem target="_blank"   href={outlookCalendarUrl(event)}>Outlook </DropdownItem>
                <DropdownItem target="_blank" href={yahooCalendarUrl(event)} >Yahoo</DropdownItem>
                <DropdownItem href={ICSCalendarUrl(event)} >iCal</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    )
}

export default Calendars