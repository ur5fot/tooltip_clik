/**
 * Created by ur5fot on 12.11.15.
 */
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', tooltipShow);
    var x, y, t, showTooltip;
    function tooltipShow(event) {
        t = event.target;
        y = event.pageY;
        x = event.pageX;

        if (t.hasAttribute('data-tooltip') && !showTooltip) {
            var tooltipE = document.createElement('div');
            tooltipE.className = 'tooltip';
            tooltipE.innerHTML = t.getAttribute('data-tooltip');
            document.body.appendChild(tooltipE);
            showTooltip = tooltipE;

            if (tooltipE.offsetWidth + 10  < x) {
                tooltipE.style.left = x - 10 - tooltipE.offsetWidth + 'px';
            } else if (tooltipE.offsetWidth + 10 > x) {
                tooltipE.style.left = x + 10 + 'px';
            }

            if (tooltipE.offsetHeight + 10  < y) {
                tooltipE.style.top = y - 10 - tooltipE.offsetHeight + 'px';
            } else if (tooltipE.offsetWidth + 10 >= y) {
                tooltipE.style.top = y + 10 + 'px';
            }

        } else {
            return
        }
    }

    document.addEventListener('mouseout', tooltipHide);
    function tooltipHide(event) {
        if (showTooltip) {
            document.body.removeChild(showTooltip);
            showTooltip = false;
        } else {
            return
        }
    }

});