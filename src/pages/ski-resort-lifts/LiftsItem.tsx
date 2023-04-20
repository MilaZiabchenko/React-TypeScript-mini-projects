import type { LiftsConfig } from './LiftsConfig';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

const LiftsItem = ({
  position,
  liftName,
  liftStatus,
  elevationGain,
  nightSkiing,
  trailAccess
}: LiftsConfig.Lift) => (
  <article className='lift'>
    <h2 className='lift-name'>
      #{position} {liftName}
    </h2>
    <dl className='lift-summary'>
      <div>
        <dt>Elevation Gain:</dt>
        <dd>{elevationGain} ft</dd>
      </div>
      <div>
        <dt>Lift Status:</dt>
        <dd>{liftStatus}</dd>
      </div>
      <div>
        <dt>Night Skiing:</dt>
        <dd>
          <i>
            {nightSkiing ? (
              <CheckBoxIcon fontSize='large' />
            ) : (
              <IndeterminateCheckBoxIcon fontSize='large' />
            )}
          </i>
        </dd>
      </div>
      <div>
        <dt>Trail Access:</dt>
        <dd>
          <ul>
            {trailAccess.map(
              ({ trailId, trailName, trailTrees }: LiftsConfig.TrailAccess) => (
                <li key={trailId}>
                  {trailName}{' '}
                  <span className='trees'>
                    {trailTrees ? '(trail has trees)' : '(no trees)'}
                  </span>
                </li>
              )
            )}
          </ul>
        </dd>
      </div>
    </dl>
  </article>
);

export default LiftsItem;
