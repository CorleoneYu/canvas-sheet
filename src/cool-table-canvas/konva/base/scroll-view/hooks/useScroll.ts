import { useCallback, useMemo, useState } from 'react';
import { limit, getLocations, calcFirstLastIndex } from './utils';

interface IScrollProps {
    sizes: number[];
    viewSize: number;
}

const maxOffset = 0;
// 滚动间隔 1 像素
const delta = 1;

/**
 * 滚动需要
 * 1. 容器尺寸 viewSize
 * 2. 内容尺寸 sizes 如：[20, 30, 10], 相加得到 contentSize = 20 + 30 + 10
 * 3. 最大滚动值固定 0，最小则为 viewSize - contentSize
 */
function useScroll(props: IScrollProps) {
    const { sizes, viewSize } = props;
    // offset 为负数
    const [offset, setOffset] = useState<number>(0);

    const locations = useMemo(() => {
        return getLocations(sizes);
    }, [sizes]);

    const minOffset = useMemo(() => {
        const last = locations[locations.length - 1];
        return viewSize - last;
    }, [viewSize, locations]);

    const [firstIndex, lastIndex] = useMemo(() => {
        return calcFirstLastIndex({ offset, locations, viewSize, sizes });
    }, [offset, locations, viewSize, sizes]);

    const handleScroll = useCallback(
        (deltaOffset: number): Promise<number> => {
            return new Promise((resolve) => {
                setOffset((pre) => {
                    // 最新滚动位置
                    const value = pre - delta * deltaOffset;
                    const newOffset = limit(maxOffset, minOffset, value);
                    resolve(newOffset);
                    return newOffset;
                });
            });
        },
        [minOffset],
    );

    return {
        offset,
        locations,
        firstIndex,
        lastIndex,
        handleScroll,
    };
}

export default useScroll;
