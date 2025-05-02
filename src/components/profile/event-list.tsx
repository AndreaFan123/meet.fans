/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Event } from "@/lib/types";

interface EventsListProps {
  events: Event[];
}

export function EventsList({ events }: EventsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(events.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const displayedEvents = events.slice(startIndex, startIndex + pageSize);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getStatusClass = (status: Event["status"]) => {
    switch (status) {
      case "Upcoming":
        return "text-blue-500 bg-blue-50 dark:bg-blue-950 dark:text-blue-300";
      case "Completed":
        return "text-green-500 bg-green-50 dark:bg-green-800 dark:text-gray-300";
      case "Canceled":
        return "text-red-500 bg-red-50 dark:bg-red-950 dark:text-red-300";
      default:
        return "";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>活動列表</CardTitle>
        <CardDescription>過去曾建立過的活動</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>活動名稱</TableHead>
              <TableHead>日期</TableHead>
              <TableHead className="hidden md:table-cell">參加人數</TableHead>
              <TableHead>活動狀態</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedEvents.map((event) => (
              <TableRow
                key={event.id}
                className="transition-colors hover:bg-secondary/40"
              >
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell>{format(event.date, "MMM d, yyyy")}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {event.attendeeCount}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
                      event.status
                    )}`}
                  >
                    {event.status.charAt(0).toUpperCase() +
                      event.status.slice(1)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {totalPages > 1 && (
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="h-4 w-4" />
              <span className="sr-only">Previous Page</span>
            </Button>
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon className="h-4 w-4" />
              <span className="sr-only">Next Page</span>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
