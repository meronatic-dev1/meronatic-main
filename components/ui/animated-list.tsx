"use client"

import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion, MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const [items, setItems] = useState<React.ReactNode[]>([])
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearInterval(interval)
    }, [delay])

    useEffect(() => {
      const newItem = childrenArray[index % childrenArray.length]
      if (!newItem) return

      // Use timestamp + index to create truly unique keys
      const uniqueKey = `${index}-${Date.now()}`

      const itemWithKey = React.cloneElement(newItem as React.ReactElement, {
        key: uniqueKey,
      })

      setItems((prev) => [itemWithKey, ...prev].slice(0, 5)) // Keep last 5 items
    }, [index, childrenArray])

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
