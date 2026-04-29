import { Label } from './Label';
import { Card } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import type { Audio, Mode, Resolution } from '@/types';

interface ParamsBarProps {
  mode: Mode;
  setMode: (m: Mode) => void;
  audio: Audio;
  setAudio: (a: Audio) => void;
  audioApplies: boolean;
  res: Resolution;
  setRes: (r: Resolution) => void;
  dur: number;
  setDur: (d: number) => void;
}

export function ParamsBar({
  mode,
  setMode,
  audio,
  setAudio,
  audioApplies,
  res,
  setRes,
  dur,
  setDur,
}: ParamsBarProps) {
  return (
    <Card className="mb-3 grid grid-cols-2 md:grid-cols-4 gap-3">
      <div>
        <Label>Mode</Label>
        <ToggleGroup type="single" value={mode} onValueChange={(v) => v && setMode(v as Mode)}>
          <ToggleGroupItem value="t2v">T2V</ToggleGroupItem>
          <ToggleGroupItem value="i2v">I2V</ToggleGroupItem>
          <ToggleGroupItem value="v2v">V2V</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <Label>Audio</Label>
        <ToggleGroup
          type="single"
          value={audio}
          onValueChange={(v) => v && setAudio(v as Audio)}
          disabled={!audioApplies}
        >
          <ToggleGroupItem value="off" disabled={!audioApplies}>
            Off
          </ToggleGroupItem>
          <ToggleGroupItem value="on" disabled={!audioApplies}>
            On
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <Label>Resolución</Label>
        <ToggleGroup type="single" value={res} onValueChange={(v) => v && setRes(v as Resolution)}>
          <ToggleGroupItem value="720p">720p</ToggleGroupItem>
          <ToggleGroupItem value="1080p">1080p</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <Label>Duración</Label>
        <ToggleGroup
          type="single"
          value={String(dur)}
          onValueChange={(v) => v && setDur(Number(v))}
        >
          <ToggleGroupItem value="5">5s</ToggleGroupItem>
          <ToggleGroupItem value="10">10s</ToggleGroupItem>
          <ToggleGroupItem value="15">15s</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </Card>
  );
}
