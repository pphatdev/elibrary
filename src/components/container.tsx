import React from "react"
import { AppSidebar } from "./app-sidebar"
import NextTopLoader from 'nextjs-toploader';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb"
import { Separator } from "./ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { Breadcrumbs } from "@/types/breadcrumbs"
import { Tiles } from "./ui/tiles";

export const Container = ({ children, breadcrumb = [] }: { children: React.ReactNode, breadcrumb: Breadcrumbs[] }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="relative">
                <NextTopLoader />
                <section className="fixed w-full h-72 top-0 z-0 overflow-hidden rounded-xl">
                    <Tiles
                        className="max-h-72 mx-auto opacity-30"
                        rows={100}
                        cols={30}
                        tileSize="sm"
                    />
                    <div className="h-72 top-0 fixed w-full bg-gradient-to-t from-background to-transparent"></div>
                </section>
                <header className="flex z-50 h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList className="flex-row flex-nowrap">
                                {breadcrumb.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <BreadcrumbItem className="line-clamp-1">
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

                <div className="flex z-50 flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}