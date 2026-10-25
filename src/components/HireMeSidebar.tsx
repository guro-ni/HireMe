import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  Heart,
  FileText,
  Palette,
} from "lucide-react"

const menuItems = [
  { title: "Mine interesser", icon: Palette },
  { title: "Tinderprofil", icon: Heart },
  { title: "CV", icon: FileText },
]

export function HireMeSidebar() {
  return (
    <Sidebar
      collapsible="offcanvas"
      className="top-20 !h-[calc(100svh-5rem)]"
    >
      <SidebarContent className="bg-rose-50">
        <SidebarGroup>
          <SidebarGroupLabel className="font-bagel text-lg px-12 text-neutral-800">
            Guro Nicholaisen
          </SidebarGroupLabel>

          <div className="flex justify-center py-4">
            <img
              src="/Guro_Nicholaisen.jpg"
              alt="Guro Nicholaisen"
              className="h-62 w-52 rounded-full object-cover border-4 border-rose-200 shadow-lg"
            />
          </div>

          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className="text-base text-neutral-800 hover:bg-rose-100 px-4 py-5">
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}