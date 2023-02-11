import { IconHeart } from '@tabler/icons';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, createStyles, Progress } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    margin:"1vh",
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display:"block"
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));



export function Proyect({ image, title, description, type, progress }) {
  const { classes, theme } = useStyles();
  type = null ?? 'sin categoria';
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180}  fit="contain"/>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge size="sm">{type}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
        <Progress value={progress} title="progress"/>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Mas informacion
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size={18} className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}