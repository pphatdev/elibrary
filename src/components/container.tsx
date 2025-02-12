import React from "react"
import { AppSidebar } from "./app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb"
import { Separator } from "./ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { Breadcrumbs } from "@/types/breadcrumbs"

export const Container = ({ children, breadcrumb = [] }: { children: React.ReactNode, breadcrumb: Breadcrumbs[] }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumb.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <BreadcrumbItem>
                                            {item.href ? (
                                                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                                            ) : (
                                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                            )}
                                        </BreadcrumbItem>
                                        {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
                                    </React.Fragment>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}