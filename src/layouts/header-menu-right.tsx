import ChatSolidIcon from '@/components/icons/chat-solid'
import ProfileMenu from '@/layouts/profile-menu'
import { ActionIcon, Badge } from 'rizzui'

export default function HeaderMenuRight() {
  return (
    <div className="ms-auto grid shrink-0 items-end gap-2 text-gray-700 xs:gap-3 xl:gap-4">
      {/* <MessagesDropdown>
        <ActionIcon aria-label="Messages" variant="text" className="relative h-[34px] w-[34px] shadow backdrop-blur-md md:h-9 md:w-9 dark:bg-gray-100">
          <ChatSolidIcon className="h-[18px] w-auto" />
          <Badge renderAsDot color="success" enableOutlineRing className="absolute right-2.5 top-2.5 -translate-y-1/3 translate-x-1/2" />
        </ActionIcon>
      </MessagesDropdown>
      <NotificationDropdown>
        <ActionIcon aria-label="Notification" variant="text" className="relative h-[34px] w-[34px] shadow backdrop-blur-md md:h-9 md:w-9 dark:bg-gray-100">
          <RingBellSolidIcon className="h-[18px] w-auto" />
          <Badge renderAsDot color="warning" enableOutlineRing className="absolute right-2.5 top-2.5 -translate-y-1/3 translate-x-1/2" />
        </ActionIcon>
      </NotificationDropdown>
      <SettingsButton /> */}
      <ProfileMenu />
    </div>
  )
}
