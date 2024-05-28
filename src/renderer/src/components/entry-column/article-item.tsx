import { FeedIcon } from "@renderer/components/feed-icon"
import { Image } from "@renderer/components/ui/image"
import dayjs from "@renderer/lib/dayjs"
import type { TimelineResponse } from "@renderer/lib/types"
import { cn } from "@renderer/lib/utils"

export function ArticleItem({ entry }: { entry: TimelineResponse[number] }) {
  return (
    <div className="my-5 flex px-2 py-3">
      <FeedIcon feed={entry.feeds} />
      <div className="-mt-0.5 line-clamp-5 flex-1 text-sm leading-tight">
        <div className="space-x-1 text-[10px] font-bold text-zinc-500">
          <span>{entry.feeds.title}</span>
          <span>·</span>
          <span>
            {dayjs
              .duration(
                dayjs(entry.entries.publishedAt).diff(dayjs(), "minute"),
                "minute",
              )
              .humanize()}
          </span>
        </div>

        <div
          className={cn(
            "my-0.5 break-words font-medium",
            entry.read ? "text-zinc-500" : "text-black dark:text-white/90",
          )}
        >
          {entry.entries.title}
        </div>
        <div className="text-[13px] text-zinc-500">{entry.entries.description}</div>
      </div>
      {entry.entries.images?.[0] && (
        <Image
          src={entry.entries.images[0]}
          className="ml-2 size-20 shrink-0"
          loading="lazy"
          proxy={{
            width: 160,
            height: 160,
          }}
        />
      )}
    </div>
  )
}
