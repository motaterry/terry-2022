import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Components/Dialog',
  component: DialogContent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A modal dialog component built with Radix UI primitives. Supports multiple sizes, accessibility features, focus trapping, keyboard navigation, and smooth animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'fullscreen'],
      description: 'Size variant of the dialog',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button (X) in the header',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether to close the dialog when clicking outside (on overlay)',
    },
  },
} satisfies Meta<typeof DialogContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
}

export const Small: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Small Dialog</Button>
      </DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader>
          <DialogTitle>Small Dialog</DialogTitle>
          <DialogDescription>
            This is a small dialog with limited width and padding.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Medium: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Medium Dialog</Button>
      </DialogTrigger>
      <DialogContent size="md">
        <DialogHeader>
          <DialogTitle>Medium Dialog</DialogTitle>
          <DialogDescription>
            This is the default medium-sized dialog. Perfect for most use cases
            with standard content.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Large: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Large Dialog</Button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Large Dialog</DialogTitle>
          <DialogDescription>
            This is a large dialog with more width and space for complex
            content, forms, or detailed information.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue="john@example.com"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Fullscreen: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Fullscreen Dialog</Button>
      </DialogTrigger>
      <DialogContent size="fullscreen">
        <DialogHeader>
          <DialogTitle>Fullscreen Dialog</DialogTitle>
          <DialogDescription>
            This dialog takes up the entire viewport. Useful for immersive
            experiences or content that needs maximum space.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Fullscreen dialogs are perfect for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Image galleries</li>
            <li>Video players</li>
            <li>Complex forms</li>
            <li>Data visualization</li>
            <li>Document viewers</li>
          </ul>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent size="md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const DestructiveAction: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent size="md">
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove all associated data.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog (No Close Button)</Button>
      </DialogTrigger>
      <DialogContent size="md" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Dialog Without Close Button</DialogTitle>
          <DialogDescription>
            This dialog doesn&apos;t show the X button. Users must use the
            Cancel button or press ESC to close.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const NoOverlayClose: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog (No Overlay Close)</Button>
      </DialogTrigger>
      <DialogContent size="md" closeOnOverlayClick={false}>
        <DialogHeader>
          <DialogTitle>Dialog Without Overlay Close</DialogTitle>
          <DialogDescription>
            This dialog cannot be closed by clicking outside. Users must use the
            close button or Cancel button.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const MinimalContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Minimal Dialog</Button>
      </DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader>
          <DialogTitle>Minimal Dialog</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          This dialog has minimal content - just a title and description.
        </p>
        <DialogFooter>
          <Button variant="outline">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog with Long Content</Button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read the following terms and conditions carefully.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-auto space-y-4 text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">Decline</Button>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const AccessibilityDemo: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Accessibility Demo</Button>
      </DialogTrigger>
      <DialogContent size="md">
        <DialogHeader>
          <DialogTitle id="dialog-title">Accessibility Features</DialogTitle>
          <DialogDescription id="dialog-description">
            This dialog demonstrates accessibility features including ARIA labels,
            keyboard navigation, and focus management.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Keyboard Navigation:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Press <kbd className="px-1 py-0.5 bg-muted rounded text-xs">ESC</kbd> to close</li>
              <li>Press <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Tab</kbd> to navigate</li>
              <li>Focus is trapped inside the dialog</li>
              <li>Focus returns to trigger when closed</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Screen Reader Support:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Proper ARIA roles and labels</li>
              <li>Title and description announced</li>
              <li>State changes announced</li>
            </ul>
          </div>
          <div className="space-y-2">
            <Label htmlFor="test-input">Test Input (for focus trap):</Label>
            <Input id="test-input" placeholder="Try tabbing through..." />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Got it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates accessibility features including ARIA labels, keyboard navigation (ESC to close, Tab to navigate), focus trapping, and screen reader support.',
      },
    },
  },
}

