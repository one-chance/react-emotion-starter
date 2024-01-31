import { Svg } from '@components/shared';

// Icon은 24x24의 크기를 기준으로 추출하여 저장한다.
// All icons are extracted based on 24x24 size.

export const close = (
  <Svg>
    <path
      clipRule="evenodd"
      d="M5.53 4.47a.75.75 0 00-1.06 1.06L10.94 12l-6.47 6.47a.75.75 0 101.06 1.06L12 13.06l6.47 6.47a.75.75 0 101.06-1.06L13.06 12l6.47-6.47a.75.75 0 00-1.06-1.06L12 10.94 5.53 4.47z"
      fillRule="evenodd"
    />
  </Svg>
);

export const darkMode = (
  <Svg>
    <path d="M19.3234 17.128c-6.8771 0-12.45664-5.5744-12.45664-12.4567 0-1.65048.32184-3.2284.9136-4.671239C3.21809 1.84265 0 6.31665 0 11.5433 0 18.4204 5.57956 24 12.4567 24c5.2265 0 9.7006-3.2232 11.5433-7.7855-1.443.5917-3.0209.9135-4.6766.9135z" />
  </Svg>
);

export const lightMode = (
  <Svg>
    <path
      clipRule="evenodd"
      d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM6.5 12a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM12 1.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0V2a.5.5 0 01.5-.5zM12 19.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM1.5 12a.5.5 0 01.5-.5h2a.5.5 0 010 1H2a.5.5 0 01-.5-.5zM19.5 12a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM20.147 3.885a.5.5 0 01-.032.707l-2.222 2.031a.5.5 0 01-.675-.738l2.222-2.031a.5.5 0 01.707.031zM3.853 3.885a.5.5 0 01.707-.031l2.222 2.031a.5.5 0 11-.675.738L3.885 4.592a.5.5 0 01-.032-.707zM6.798 17.202a.5.5 0 010 .707l-2.222 2.223a.5.5 0 01-.707-.708l2.222-2.222a.5.5 0 01.707 0zM17.202 17.201a.5.5 0 01.707 0l2.222 2.223a.5.5 0 11-.707.707l-2.222-2.222a.5.5 0 010-.707z"
      fillRule="evenodd"
    />
  </Svg>
);

export const correct = (
  <Svg>
    <path
      clipRule="evenodd"
      d="M15.017.898a1.5 1.5 0 01.085 2.12l-8.307 9a1.5 1.5 0 01-2.205 0l-3.692-4a1.5 1.5 0 012.204-2.035l2.59 2.806L12.898.983a1.5 1.5 0 012.12-.085z"
      fillRule="evenodd"
    />
  </Svg>
);

export const checkbox = (
  <Svg fill="none">
    <rect height="24" rx="3.5" stroke="#808496" width="24" x="0" y="0" />
  </Svg>
);

export const checked = (
  <Svg fill="none">
    <rect
      fill="#6877FF"
      height="24"
      rx="3.5"
      stroke="#6877FF"
      width="24"
      x="0"
      y="0"
    />
    <path
      d="M7.5 12l3 3 6-6"
      stroke="#fff"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const arrowUp = (
  <Svg>
    <path
      clip-rule="evenodd"
      d="M4.192 15.754a.75.75 0 001.059.057l6.748-6.053 6.75 6.053a.75.75 0 101-1.116L12.5 8.192a.75.75 0 00-1.001 0l-7.25 6.503a.75.75 0 00-.057 1.059z"
      fill-rule="evenodd"
    />
  </Svg>
);

export const arrowRight = (
  <Svg>
    <path
      clipRule="evenodd"
      d="M8.25 19.808a.75.75 0 01-.058-1.059l6.053-6.748-6.053-6.75a.75.75 0 011.116-1l6.503 7.249a.75.75 0 010 1.001l-6.503 7.25a.75.75 0 01-1.059.057z"
      fillRule="evenodd"
    />
  </Svg>
);

export const arrowDown = (
  <Svg>
    <path
      clipRule="evenodd"
      d="M4.192 10.25a.75.75 0 011.059-.058l6.748 6.053 6.75-6.053a.75.75 0 011 1.116L12.5 17.811a.75.75 0 01-1.001 0l-7.25-6.503a.75.75 0 01-.057-1.059z"
      fillRule="evenodd"
    />
  </Svg>
);

export const arrowLeft = (
  <Svg>
    <path
      clipRule="evenodd"
      d="M15.75 4.192a.75.75 0 01.058 1.059l-6.054 6.748 6.054 6.75a.75.75 0 01-1.116 1L8.189 12.5a.75.75 0 010-1.001l6.503-7.25a.75.75 0 011.059-.057z"
      fillRule="evenodd"
    />
  </Svg>
);

export const language = (
  <Svg>
    <path
      clipRule="evenodd"
      d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
      fillRule="evenodd"
    />
  </Svg>
);

export const menu = (
  <Svg>
    <path
      clipRule="evenodd"
      d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zM3 11.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 17.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
      fillRule="evenodd"
    />
  </Svg>
);
